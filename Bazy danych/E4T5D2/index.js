const {db, client} = require('./utils/db');
const {TodoRepository} = require('./repositories/todo.repository');
const {TodoRecord} = require("./records/todo.record");
const {ObjectId} = require("mongodb");

(async() => {
	try {
		const todo = new TodoRecord({
			title: 'Skończyć 2 projekt MongoDB',
			_id: '61c61f67c82843560b6af652',
		});
		await TodoRepository.insert(todo);
		// console.log(await TodoRepository.findAll());
	}
	finally {
		await client.close();
	}
})();