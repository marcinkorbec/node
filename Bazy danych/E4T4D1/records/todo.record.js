const {pool} = require("../utils/db");
const {v4: uuid} = require('uuid')

class TodoRecord {
	constructor(obj) {
		if (obj.title.trim() < 5) {
			throw new Error('Tytuł Todosa ma mieć tytuł dluższy niż 5 znaków.');
		}

		if (obj.title.length > 150) {
			throw new Error('Tytuł Todosa nie powinien być dłuższy niż 150 znaków.');
		}
		this.title = obj.title;
		this.id = obj.id;
	}

	async insert() {
		if (typeof this.id === "undefined") {
			this.id = uuid();
		}
		await pool.execute('INSERT INTO `todos` VALUES(:id, :title)', {
			id: this.id,
			title: this.title
		});
	}

	async delete() {
		await pool.execute('DELETE FROM `todos`')
	}

	async update(){
		await pool.execute()
	}
}

module.exports = {
	TodoRecord,
}