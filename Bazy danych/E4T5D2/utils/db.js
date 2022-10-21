const {MongoClient} = require('mongodb');

const client = new MongoClient('mongodb+srv://marcin:naMddqNgCs5ZDqbC@cluster0.w7tz8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
client.connect();

const db = client.db('megak_todo');
const todos = db.collection('todos');

module.exports = {
	db,
	todos,
	client,
}