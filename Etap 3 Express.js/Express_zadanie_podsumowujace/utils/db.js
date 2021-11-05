const {readFile, writeFile} = require('fs').promises; // bierzemy dwie metody zapis i odczyt pliku z modułu fs. wersja promisowa
const {join} = require('path'); //bierzemy metodę join z modułu path
const {v4: uuid} = require('uuid'); //bierzemy wersję czwartą z modułu uuid i destrukturyzuję ją na uuid

class Db {
	constructor(dbFilename) {
		this.dbFilename = join(__dirname, '../data', dbFilename); //łączymy ściężkę żeby była zawsze aktualna niezależnie od tego gdzie znajduje sie projekt
		console.log(this.dbFilename);
		this._load();
	}

	async _load() {
		this._data = JSON.parse(await readFile(this.dbFilename,'utf8')); //pobieramy i ładujemy dane z tego jsona i zmieniamy je na obiekt
		console.log(typeof(this._data));
	}

	create(obj) {
		this._data.push({
			id: uuid(),
			...obj, //operator rozproszenia , tworzę obiekt i "rozpraszam" żeby móc dodać id
		}); //wpychamy dane do tablicy
		writeFile(this.dbFilename, JSON.stringify(this._data), 'utf8'); //zapisujemy dane czyli tablicę do której linijkę wyżej wepchnęliśmy kolejny obiekt. Metoda ta zapsuje cały Dżejson od nowa.
	}

	getAll() { // pobierz całą listę
		return this._data;
	}

	update(id, newObj) {
		this._data = this._data.map(oneObj => { //mapujemy obiekt czyli zmieniamy jeden w drugi jakby
			if (oneObj.id === id) { //jeśli pojedynczy obiekt ma id równe id, którego szukamy
				return { //zwracamy nowy obiekt w którym
					...oneObj, //zwracamy cały poprzedni obiekt
					...newObj, //a potem zwracam cały nowy obiekt
				}
			} else {
				return oneObj; //zwracamy ten sam obiekt
			}
		})
		writeFile(this.dbFilename, JSON.stringify(this._data), 'utf8'); //na koniec zapisujemy plik
	}
}

const db = new Db('db.json');


module.exports = {
	db
}