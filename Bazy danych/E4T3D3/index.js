const mysql = require('mysql2/promise');

(async() => {
	const connection = await mysql.createConnection({
		host: 'localhost',
		user: 'root',
		database: 'megak_cars',
	});

	const answer = await connection.execute('INSERT INTO `cars_places`(`carRegistrationNo`, `placeId`) VALUES("SJZ001B", 3)');
	console.log(answer)

})();