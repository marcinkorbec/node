const {pool} = require("../utils/db");

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
		await pool.execute('INSERT INTO `todos` VALUES(:id, :title)', {
			id: this.id,
			title: this.title
		});
	}
}

module.exports = {
	TodoRecord,
}