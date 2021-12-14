const mysql = require('mysql2/promise');

const pool = mysql.createPool({
	host: 'localhost',
	user: 'root',
	database: 'megak_courses',
	decimalNumbers: true,
	namedPlaceholders: true,
	bigNumberStrings: false,
});

(async () => {

	const [results] = await pool.execute('SELECT * FROM `courses`');
	console.log(results)

})();