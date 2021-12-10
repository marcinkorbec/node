const mysql = require('mysql2/promise');

(async() => {
	const connection = await mysql.createConnection({
		host: 'localhost',
		user: 'root',
		database: 'megak_cars',
		decimalNumbers: true,
		multipleStatements: true,
	});

	const regNo = 'DW21739';
	console.log(sql);

	const [answer] = await connection.query('SELECT * FROM `cars` WHERE `registrationNo`= ?;', [regNo]);
	console.log(answer);

})();