const {pool} = require('./utils/db.js');
const {TodoRecord} = require("./records/todo.record");

(async() => {
	const firstTodoItem = new TodoRecord({
		title: 'Zrobić dzień 6 megak',
	});

	const newId = await firstTodoItem.insert();
	console.log('New todo item added with ID', newId);

	await pool.end();
})();