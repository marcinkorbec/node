const {pool} = require('./utils/db.js');
const {TodoRecord} = require("./records/todo.record");
const {TodoRepository} = require("./repositories/todo.repository");

(async() => {
	const foundTodo = await TodoRepository.findAll();
	foundTodo.title = 'Pójść zrobić kupę'
	console.log(foundTodo)

	await pool.end();
})();