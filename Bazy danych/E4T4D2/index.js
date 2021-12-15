const {pool} = require('./utils/db.js');
const {TodoRecord} = require("./records/todo.record");

(async() => {
	// const firstTodoItem = new TodoRecord({
	// 	title: 'Zrobić dzień 6 megak',
	// });
	//
	// const newId = await firstTodoItem.insert();
	// console.log('New todo item added with ID', newId);
	//
	// await firstTodoItem.delete();

	// const foundTodo = await TodoRecord.find('xyz');
	// await foundTodo.delete();

	const foundTodo = await TodoRecord.find('7f01251e-7f82-471b-bba4-136e087c84b2');
	foundTodo.title = 'Pójść zrobić kupę'
	await foundTodo.update();

	await pool.end();
})();