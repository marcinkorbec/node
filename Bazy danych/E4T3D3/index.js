const mysql = require('mysql2/promise');

(async () => {
	const connection = await mysql.createConnection({
		host: 'localhost',
		user: 'root',
		database: 'megak_cars',
		decimalNumbers: true,
	});

	const value = 10000;

	const {affectedRows} = (
		await connection.execute('UPDATE `cars` SET `price`= `price` + :myValue WHERE `price` > :myValue',
			{
				value: value,
			}
		)
	)[0];
})();