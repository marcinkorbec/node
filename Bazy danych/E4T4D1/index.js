const {pool} = require('./utils/db.js');
const {TodoRecord} = require("./records/todo.record");

(async() => {
	const firstTodoItem = new TodoRecord({
		id: 'xyz',
		title: 'Zrobić dzień piąty megak',
	});
	await firstTodoItem.insert();
	console.log(firstTodoItem);
	await pool.end();
})();