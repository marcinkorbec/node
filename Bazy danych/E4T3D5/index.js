const mysql = require('mysql2/promise');

const pool = mysql.createPool({
	host: 'localhost',
	user: 'root',
	database: 'megak_course',
	decimalNumbers: true,
	namedPlaceholders: true,
	bigNumberStrings: false,
});

(async () => {
	//1.
	const [results] = await pool.execute('SELECT * FROM `courses`');
	console.log(results);

	//2.
	pool.execute('SELECT `students`.`id`, `students`.`Name`, `students`.`Surname`, `courses`.`Nazwa Kursu`, WHERE )

	await pool.end();

})();