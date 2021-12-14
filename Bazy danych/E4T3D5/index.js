const mysql = require('mysql2/promise');


(async () => {
	const pool = mysql.createPool({
		host: 'localhost',
		user: 'root',
		database: 'megak_courses',
		decimalNumbers: true,
		namedPlaceholders: true,
		bigNumberStrings: false,
	});


})();