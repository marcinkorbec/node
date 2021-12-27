const {pool, todos} = require("../utils/db");
const {v4: uuid} = require('uuid')
const {ObjectId} = require("mongodb");

class TodoRecord {
	constructor(obj) {
		this.title = obj.title;
		this._id = ObjectId(obj._id);
		this._validate();
	}

	_validate() {
		if (this.title.trim().length < 5) {
			throw new Error('Tytuł Todosa ma mieć tytuł dluższy niż 5 znaków.');
		}

		if (this.title.length > 150) {
			throw new Error('Tytuł Todosa nie powinien być dłuższy niż 150 znaków.');
		}
	}

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

		await todos.deleteOne({
			_id: record._id,
		})
	}

	static async findAll() {
		return (await todos.find()).toArray();
	}

	static async find(id) {
		const item = await todos.findOne({_id: ObjectId(String(id))});
		return item === null ? null: new TodoRecord(item);
	}

	static async update(record) {
		TodoRepository._checkRecord(record);
		await todos.replaceOne({
			_id: record._id,
		}, {
			title: String(record.title),
		});
	}
}

module.exports = {
	TodoRecord,
}
