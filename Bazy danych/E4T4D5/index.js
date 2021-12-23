const {MongoClient, ObjectId} = require("mongodb");

const client = new MongoClient('mongodb://localhost:27017', {useNewUrlParser: true});

(async() => {
	await client.connect();
	const db = client.db('megak_music');
	const result = await db.collection('songs').updateOne({
		_id: ObjectId('61bcb04b70408673381f8fa2')
		}, {
				$set: {
					artist: 'Kaśka Sochacka',
				},
				$inc: {
					length: 10,
				}
			},
		);
	console.log(result);
	await client.close();
})();
