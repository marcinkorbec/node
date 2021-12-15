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

	const foundTodo = await TodoRecord.find('a746dabe-68cd-45b1-bf9c-367cc91d0fbe')
	console.log(foundTodo);

	await pool.end();
})();