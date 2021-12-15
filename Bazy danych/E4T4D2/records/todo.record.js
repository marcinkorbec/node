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
}

module.exports = {
	TodoRecord,
}
