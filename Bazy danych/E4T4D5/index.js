const mongo = require('mongodb');

const client = new mongo.MongoClient('mongodb://localhost:27017', {useNewUrlParser: true});

(async() => {
	await client.connect();
	const db = client.db('megak_music');
	// const songs = await db.collection('songs').find();
	for await (const song of db.collection('songs').find()) {
		console.log(song._id);
	}
	await client.close();
})();
