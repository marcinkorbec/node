const {MongoClient, ObjectId} = require("mongodb");

const client = new MongoClient('mongodb://localhost:27017', {useNewUrlParser: true});

(async() => {
	await client.connect();
	const db = client.db('megak_music2');
	await db.createCollection('songs');

	const songs = [
		{
			title: 'Długość dźwięku samotności',
			artist: 'Artur Rojek',
			length: 350,
		},
		{
			title: 'Beksa',
			artist: 'Artur Rojek',
			length: 330,
		},
		{
			title: 'Na cały świat',
			artist: 'Sokół',
			length: 380,
		},
		{
			title: 'Szczęścia milimetr',
			artist: 'O.S.T.R.',
			length: 360,
		}
	];

	await db.collection('songs').insertMany(songs);
	await client.close();
})();
