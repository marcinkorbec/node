const {db, client} = require('./utils/db');
const {TodoRepository} = require('./repositories/todo.repository');
const {TodoRecord} = require("./records/todo.record");
const {ObjectId} = require("mongodb");

(async() => {
	try {
		//DODAWANIE REKORDU
		// const todo = new TodoRecord({
		// 	title: 'Skończyć 2 projekt MongoDB',
		// 	_id: '61c61f67c82843560b6af652',
		// });
		// await TodoRepository.insert(todo);
		// console.log(await TodoRepository.findAll());

		//UPDATOWANIE REKORDU
		// const todo = await TodoRepository.find('61c61d2682532f5af6aa7188');
		// todo.title = 'Coś zwykłego'
		// await TodoRepository.update(todo);
		// console.log(await TodoRepository.find('61c61d2682532f5af6aa7188'));

		USUWANIE REKORDU
		const todo = await TodoRepository.find('61c61d2682532f5af6aa7188');
		todo.title = 'Coś zwykłego'
		await TodoRepository.delete(todo);
		console.log(await TodoRepository.find('61c61d2682532f5af6aa7188'));

	}
	finally {
		await client.close();
	}
})();