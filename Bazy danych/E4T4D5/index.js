const mongo = require('mongodb');

const client = new mongo.MongoClient('mongodb://localhost:27017', {useNewUrlParser: true});

(async() => {
	await client.connect();
	const db = client.db('megak_music');
	const songs = db.collection('songs').find({}).toArray(function(err, result) {
		if (err) throw err;
		console.log(result);
	});
	// console.log(songs)
	await client.close();
})();