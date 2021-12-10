const mysql = require('mysql2/promise');

(async() => {
	const connection = await mysql.createConnection({
		host: 'localhost',
		user: 'root',
		database: 'megak_cars',
	});

	const answer = await connection.execute('INSERT INTO `cars` VALUES("SJZ001B", "Mercedes", "C63 AMG","BLACK PEARL" "2021-01-01", 200000)');
	console.log(answer)

})();