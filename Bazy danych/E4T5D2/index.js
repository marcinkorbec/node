const {db} = require('./utils/db');
const {TodoRepository} = require('./repositories/todo.repository')

(async() => {
	console.log(await TodoRepository.findAll());
})();