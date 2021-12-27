const {db, client} = require('./utils/db');
const {TodoRecord} = require("./records/todo.record");
const {ObjectId} = require("mongodb");

(async() => {
	try {
		const todo = await TodoRecord.find('61c60af2bc8c86fe794abd4d');
		todo.title = 'Rozpocząć coś nowego';
		await todo.update()
		console.log(todo);
	}
	finally {
		await client.close();
	}
})();