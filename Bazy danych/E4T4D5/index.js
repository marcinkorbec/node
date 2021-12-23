const mongo = require('mongodb');
const {ObjectId} = require("mongodb");

const client = new mongo.MongoClient('mongodb://localhost:27017', {useNewUrlParser: true});

(async() => {
	await client.connect();
	const db = client.db('megak_music');
	const oneSong = await db.collection('songs').findOne({_id: mongo.ObjectId('61bcbc1b70408673381f8fa9')});
	console.log(oneSong);
	await client.close();
})();
