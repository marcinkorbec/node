class ClientRecord {
  constructor(obj) {
    const {name, id, mail, notes, nextContactAt} = obj;

    if (!name || typeof name !== "string" || name.length < 3) {
      throw new Error("Twoje imię nie może być mniejsze niż 3 znaki.")
    }
    if (!id || typeof id !== "string") {
      throw new Error("Błąd ID.")
    }
    if (!mail || typeof mail !== "string" || mail.includes('@') !== true) {
      throw new Error("Błąd w podanym mailu")
    }
    if (!nextContactAt) {
      throw new Error("Błąd w podanym najbliższym kontakcie.")
    }
    this.name = name;
    this.id = id;
    this.mail = mail;
    this.notes = notes;
    this.nextContactAt = nextContactAt;


  }

}

module.exports = {
  ClientRecord
}
