class GiftRecord {
	static async listAll() {
		const [results] = await return pool.execute("SELECT * FROM `gifts`");
	}
}

module.exports = {
	GiftRecord,
}