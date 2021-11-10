const {ValidationError} = require("../utils/errors");

class ClientRecord {
	constructor(obj) {
		const {id, mail, name, next, notes} = obj;

		if (!id || typeof id !== 'string') {
			throw new ValidationError('ID nie może być puste!');
		}

		if(!name || typeof name !== 'string' || name.length < 3) {
			throw new ValidationError('Imię musi być tekstem o długości min. 3 znaków.');
		}

		if(!mail || typeof mail !== 'string' || mail.indexOf('@') === -1) {
			throw new ValidationError('Email Nieprawidłowy!');
		}

		if (typeof next !== 'string') {
			throw new ValidationError('Data następnego kontaktu musi być tekstem!')
		}

		if (typeof notes !== 'string') {
			throw new ValidationError('Notatki muszą być tekstem!')
		}

		this.id = id;
		this.name = name;
		this.mail = mail;
		this.next = next;
		this.notes = notes;
	}
}

module.exports = {
	ClientRecord,
}