const {db, client} = require('./utils/db');
const {TodoRecord} = require("./records/todo.record");
const {ObjectId} = require("mongodb");

(async() => {
	try {
		//UPDATOWANIE
		// const todo = await TodoRecord.find('61c60af2bc8c86fe794abd4d');
		// todo.title = 'Rozpocząć coś nowego';
		// await todo.update();
		// console.log(todo);

		//USUWANIE
		// const todo = await TodoRecord.find('61c61f67c82843560b6af652');
		// await todo.delete();
		// console.log(todo);

		//WYŚWIETLANIE Z KURSORA
		// for await (const todo of await TodoRecord.findAllWithCursor()) {
		// 	console.log(new TodoRecord(todo));
		// }

		//UPDATOWANIE Z KURSORA
		for await (const todo of await TodoRecord.findAllWithCursor()) {
			const record = new TodoRecord(todo)
			record.title += ' [updated]';
			await record.update();
			console.log(await TodoRecord.findAll());
		}



	}
	finally {
		await client.close();
	}
})();