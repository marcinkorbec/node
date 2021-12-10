const mysql = require('mysql2/promise');

(async() => {
	const connection = await mysql.createConnection({
		host: 'localhost',
		user: 'root',
		database: 'megak_cars',
	});

	connection.execute('SELECT * FROM')

})();