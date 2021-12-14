const {pool} = require('./utils/db.js');
const {TodoRecord} = require("./records/todo.record");

(async() => {
	const firstTodoItem = new TodoRecord({
		title: 'Zrobić dzień 6 megak',
	});
	await firstTodoItem.insert();
	console.log(firstTodoItem);
	await pool.end();
})();