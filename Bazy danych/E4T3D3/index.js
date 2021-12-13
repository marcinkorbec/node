const mysql = require('mysql2/promise');

(async () => {
	const pool = await mysql.createPool({
		host: 'localhost',
		user: 'root',
		database: 'megak_cars',
		decimalNumbers: true,
		namedPlaceholders: true,
	});

	const value = 10000;
	
	const {affectedRows} = (
		await pool.execute(
			'UPDATE `cars` SET `price` = `price` + :myValue WHERE `price` > :myValue',
			{
				myValue: value,
			},
		)
	)[0];
	console.log(affectedRows);
})();