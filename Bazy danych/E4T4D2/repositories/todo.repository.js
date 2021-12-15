const {v4: uuid} = require("uuid");
const {pool} = require("../utils/db");
const {TodoRecord} = require("../records/todo.record");

class TodoRepository {
	static async insert(record) {
		if (!(record instanceof TodoRecord)) {
			throw new Error('Tworzony obiekt nie jest instancją klasy TodoRecord.')
		}

		if (typeof this.id === "undefined") {
			this.id = uuid();
		}

		await pool.execute('INSERT INTO `todos` VALUES(:id, :title)', {
			id: this.id,
			title: this.title
		});

		return this.id
	}

	static async delete() {
		if (!this.id) {
			throw new Error('Todos, który próbujesz usunąć, nie istnieje!');
		}
		await pool.execute('DELETE FROM `todos` WHERE  `id` = :id', {
			id: this.id,
			title: this.title,
		})
	}

	static async find(id) {
		const [results] = await pool.execute('SELECT * FROM `todos` WHERE `id` = :id', {
			id: id,
		});
		return new TodoRecord(results[0]);
	}

	static async update() {
		this._validate();

		if (!this.id) {
			throw new Error('Todos, który próbujesz usunąć, nie istnieje!');
		}

		await pool.execute('UPDATE `todos` SET  `title` = :title WHERE `id` = :id', {
			id: this.id,
			title: this.title,
		})
	}
}

module.exports = {
	TodoRepository,
}