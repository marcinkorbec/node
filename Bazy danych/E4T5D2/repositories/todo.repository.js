const {v4: uuid} = require("uuid");
const {pool} = require("../utils/db");
const {TodoRecord} = require("../records/todo.record");

class TodoRepository {
	static _checkRecord(record) {
		if (!(record instanceof TodoRecord)) {
			throw new Error('Tworzony obiekt nie jest instancją klasy TodoRecord.')
		}
	}

	static async insert(record) {
		TodoRepository._checkRecord(record);

		if (typeof record.id === "undefined") {
			record.id = uuid();
		}

		await pool.execute('INSERT INTO `todos` VALUES(:id, :title)', {
			id: record.id,
			title: record.title
		});

		return record.id
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
		return (await todos.find())
	}

	static async find(id) {
		const [results] = await pool.execute('SELECT * FROM `todos` WHERE `id` = :id', {
			id: id,
		});
		return new TodoRecord(results[0]);
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