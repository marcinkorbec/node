const mysql = require('mysql2/promise');


(async () => {
	const conn = await mysql.createConnection({
		host: 'localhost',
		user: 'root',
		database: 'megak_courses',
		decimalNumbers: true,
		namedPlaceholders: true,
	});


})();