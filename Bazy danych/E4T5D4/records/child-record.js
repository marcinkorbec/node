const {pool} = require("../utils/db");
const {ValidationError} = require("../utils/error");
const {v4: uuid} = require("uuid");

class ChildRecord {
	constructor(obj) {
		if (!obj.name || obj.name.length < 3 || obj.name.length > 25) {
			throw new ValidationError('Imię prezentu musi mieć od 3 do 25 znaków.')
		}

		this.name = obj.name;
		this.id = obj.id;
	}

	async insert() {
		if (!this.id) {
			this.id = uuid();
		}

		await pool.execute("INSERT INTO `gifts`(`id`, `name`) VALUES(:id, :name)", {
			id: this.id,
			name: this.name,
		});

		return this.id;
	}
	static async listAll() {
		const [results] = await pool.execute("SELECT * FROM `children` ORDER BY `name` ASC");
		return results;
	}

}

module.exports = {
	ChildRecord,
}