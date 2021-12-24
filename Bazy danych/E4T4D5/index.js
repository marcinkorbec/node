const {MongoClient, ObjectId} = require("mongodb");

const client = new MongoClient('mongodb://localhost:27017', {useNewUrlParser: true});

(async() => {
	await client.connect();
	const db = client.db('megak_music2');
	// await db.createCollection('songs');

	// const songs = [
	// 	{
	// 		title: 'Plejada',
	// 		artist: 'Artur Rojek',
	// 		length: 350,
	// 	},
	// 	{
	// 		title: 'Inspiracje',
	// 		artist: 'Artur Rojek',
	// 		length: 330,
	// 	},
	// 	{
	// 		title: 'Raz dwa trzy',
	// 		artist: 'Sokół',
	// 		length: 380,
	// 	},
	// 	{
	// 		title: 'O włos od młynarza',
	// 		artist: 'O.S.T.R.',
	// 		length: 360,
	// 	}
	// ];

	// await db.collection('songs').insertMany(songs);


	for await (const song of db.collection('songs').find({
		artist: String('Artur Rojek')
	})) {
		console.log(song);
	}
	await client.close();
})();
