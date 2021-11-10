const {readFile, writeFile} = require('fs').promises; // bierzemy dwie metody zapis i odczyt pliku z modułu fs. wersja promisowa
const {join} = require('path'); //bierzemy metodę join z modułu path
const {v4: uuid} = require('uuid');
const {ClientRecord} = require("../record/client-record"); //bierzemy wersję czwartą z modułu uuid i destrukturyzujemy ją na uuid


class Db {
	constructor(dbFilename) {
		this.dbFilename = join(__dirname, '../data', dbFilename);
		//łączymy ściężkę żeby była zawsze aktualna niezależnie od tego gdzie znajduje sie projekt
		this._load();
	}

	async _load() {
		this._data = JSON.parse(await readFile(this.dbFilename,'utf8')).map(obj => new ClientRecord(obj));
		//pobieramy i ładujemy dane z tego jsona i zmieniamy je na obiekt
	}

	_save() {
		writeFile(this.dbFilename, JSON.stringify(this._data), 'utf8');
		//zapisujemy dane czyli tablicę do której linijkę wyżej wepchnęliśmy kolejny obiekt. Metoda ta zapsuje cały Dżejson od nowa.
	}

	create(obj) {
		const id = uuid();
		this._data.push(new ClientRecord({
			id: id,
			...obj, //operator rozproszenia , tworzę obiekt i "rozpraszam" żeby móc dodać id
		})); //wpychamy dane do tablicy
		this._save();
		return id;
	}

	getAll() { // pobierz całą listę
		return this._data;
	}

	getOne(id) {
		return this._data.find(oneObj => oneObj.id === id);
		//zwróć obiekt , który będzie miał id takie jak szukamy
	}

	update(id, newObj) {
		this._data = this._data.map(oneObj => { //mapujemy obiekt czyli zmieniamy jeden w drugi jakby
			if (oneObj.id === id) { //jeśli pojedynczy obiekt ma id równe id, którego szukamy
				return new ClientRecord({ //zwracamy nowy obiekt w którym
					...oneObj, //zwracamy cały poprzedni obiekt
					...newObj, //a potem zwracam cały nowy obiekt
				})
			} else {
				return oneObj; //zwracamy ten sam obiekt
			}
		})
		this._save(); //na koniec zapisujemy plik
	}

	delete(id) {
		this._data = this._data.filter(oneObj => oneObj.id !== id);
		this._save(); //debounce
	}
}
// debounce to np coś takiego że czekamy aż wielu użytkoników dokona jakichś zmian i dopiero wtedy zapisujemy wszystko za jednym razem

const clientsDb = new Db('db.json');



module.exports = {
	db: clientsDb
}