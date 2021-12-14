class TodoRecord {
	constructor(obj) {
		if (obj.title.trim() < 5) {
			throw new Error('Tytuł Todosa ma mieć tytuł dluższy niż 5 znaków.');
		}

		if (obj.title.length > 150) {
			throw new Error('Tytuł Todosa nie powinien być dłuższy niż 150 znaków.');
		}
		this.title = obj.title;
		this.id = obj.id;
	}
}