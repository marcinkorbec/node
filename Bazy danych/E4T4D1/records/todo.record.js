const {pool} = require("../utils/db");
const {v4: uuid} = require('uuid')

class TodoRecord {
	constructor(obj) {
		this.title = obj.title;
		this.id = obj.id;
		this._validate();
	}

	_validate() {
		if (obj.title.trim() < 5) {
			throw new Error('Tytuł Todosa ma mieć tytuł dluższy niż 5 znaków.');
		}

		if (obj.title.length > 150) {
			throw new Error('Tytuł Todosa nie powinien być dłuższy niż 150 znaków.');
		}
	}

	async insert() {

		if (typeof this.id === "undefined") {
			this.id = uuid();
		}
		await pool.execute('INSERT INTO `todos` VALUES(:id, :title)', {
			id: this.id,
			title: this.title
		});
		
		return this.id
	}

	async delete() {
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

	async update(){
		this._validate();
		await pool.execute('UPDATE `todos` SET  `title` = :title WHERE `id` = :id', {
			id: this.id,
			title: this.title,
		})
	}


}

module.exports = {
	TodoRecord,
}