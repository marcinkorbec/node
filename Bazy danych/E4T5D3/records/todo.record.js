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

	async insert() {
		const {insertedId} = await todos.insertOne({
			title: String(this.title),
			_id: this._id
		});
		this._id = insertedId;
		console.log(insertedId)
	}

	async delete() {
		await todos.deleteOne({
			_id: this._id,
		})
	}

	static async findAll() {
		return (await(await todos.find()).toArray()).map(obj => new TodoRecord(obj));
	}

	static async findAllWithCursor() {
		return /*await*/ todos.find();
	}

	static async find(id) {
		const item = await todos.findOne({_id: ObjectId(String(id))});
		return item === null ? null: new TodoRecord(item);
	}

	async update() {
		await todos.replaceOne({
			_id: this._id,
		}, {
			title: String(this.title),
		});
	}
}

module.exports = {
	TodoRecord,
}
