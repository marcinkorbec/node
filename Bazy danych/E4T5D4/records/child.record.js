const {pool} = require("../utils/db");
const {ValidationError} = require("../utils/errors");
const {v4: uuid} = require("uuid");

class ChildRecord {
	constructor(obj) {
		if (!obj.name || obj.name.length < 3 || obj.name.length > 25) {
			throw new ValidationError('Imię prezentu musi mieć od 3 do 25 znaków.')
		}

		this.name = obj.name;
		this.id = obj.id;
		this.giftId = obj.giftId;
	}

	async insert() {
		if (!this.id) {
			this.id = uuid();
		}

		await pool.execute("INSERT INTO `child`(`id`, `name`) VALUES(:id, :name)", {
			id: this.id,
			name: this.name,
		});

		return this.id;
	}

	static async listAll() {
		const [results] = await pool.execute("SELECT * FROM `child` ORDER BY `name` ASC");
		return results.map(obj => new ChildRecord(obj));
	}

	static async getOne(id) {
		const [results] = await pool.execute("SELECT * FROM `child` WHERE `id`= :id", {
			id,
		});
		return results.length === 0 ? null : new ChildRecord(results[0]);
	}

	async update() {
		await pool.execute("UPDATE `child` SET `name` = :name, `giftId`= :giftId WHERE `id` = :id", {
			id: this.id,
			name: this.name,
			giftId: this.giftId,
		});

		return this.id;
	}
}

module.exports = {
	ChildRecord,
}