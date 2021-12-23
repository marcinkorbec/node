const {MongoClient, ObjectId} = require("mongodb");

const client = new MongoClient('mongodb://localhost:27017', {useNewUrlParser: true});

(async() => {
	await client.connect();
	const db = client.db('megak_music2');
	await db.createCollection('songs');

	await client.close();
})();
