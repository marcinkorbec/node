const {readFile, writeFile} = require('fs').promises;
const {join} = require('path');

class Db {
	constructor(dbFilename) {
		this.dbFilename = join(__dirname, '../data', dbFilename); //łączymy ściężkę żeby była zawsze aktualna niezależnie od tego gdzie znajduje sie projekt
		console.log(this.dbFilename);
		this._load();
	}

	async _load() {
		this._data = JSON.parse(await readFile(this.dbFilename,'utf8')) //
	}
}

const db = new Db('client.json');