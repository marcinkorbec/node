const {db} = require('./utils/db');
const {TodoRepository} = require('./repositories/todo.repository');

(async() => {

	try {
		console.log(await TodoRepository.findAll());
	} finally {
		await client.close();
	}
})();