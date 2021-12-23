const {MongoClient, ObjectId} = require("mongodb");

const client = new MongoClient('mongodb://localhost:27017', {useNewUrlParser: true});

(async() => {
	await client.connect();
	const db = client.db('megak_music');
	const artist = {$ne: ''};
	for await (const result of db.collection('songs').find({artist})) {
		console.log(result);
	};
	await client.close();
})();
