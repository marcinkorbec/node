const {v4: uuid} = require("uuid");
const {pool, todos} = require("../utils/db");
const {TodoRecord} = require("../records/todo.record");

class TodoRepository {
	static _checkRecord(record) {
		if (!(record instanceof TodoRecord)) {
			throw new Error('Tworzony obiekt nie jest instancją klasy TodoRecord.')
		}
	}

	static async insert(record) {
		TodoRepository._checkRecord(record);
		const {insertedId} = await todos.insertOne(record);
		record._id = insertedId;
		console.log(insertedId)
	}

	static async delete(record) {
		TodoRepository._checkRecord(record);

		if (!record.id) {
			throw new Error('Todos, który próbujesz usunąć, nie istnieje!');
		}

		await pool.execute('DELETE FROM `todos` WHERE  `id` = :id', {
			id: record.id,
			title: record.title,
		})
	}

	static async findAll() {
		return (await todos.find()).toArray();
	}

	static async find(id) {
		return await todos.findOne({_id: id});
	}

	static async update(record) {
		TodoRepository._checkRecord(record);

		if (!record.id) {
			throw new Error('Todos, który próbujesz usunąć, nie istnieje!');
		}

		this._validate();

		await pool.execute('UPDATE `todos` SET  `title` = :title WHERE `id` = :id', {
			id: record.id,
			title: record.title,
		})
	}
}

module.exports = {
	TodoRepository,
}