const {pool} = require("../utils/db");
const {} = require("../utils/errors");

class GiftRecord {
	constructor(obj) {
		if (!obj.name || obj.name.length < 3 || obj.name.length > 55) {
			throw new ValidationError('Nazwa prezentu musi mieć od 3 do 55 znaków.')
		}

		if (!obj.count || obj.count.length < 1 || obj.count > 9999999) {
			throw new ValidationError('Liczba szt. prezentu powinna  się mieścić w przedziale 1 - 999999.')
		}

		this.name = obj.name;
		this.count = obj.count;
		this.id = obj.id;
	}

	static async listAll() {
		const [results] = await pool.execute("SELECT * FROM `gifts`");
		return results;
	}
}

module.exports = {
	GiftRecord,
}