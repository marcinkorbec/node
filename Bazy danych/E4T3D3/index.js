const mysql = require('mysql2/promise');

(async () => {
	const connection = await mysql.createConnection({
		host: 'localhost',
		user: 'root',
		database: 'megak_cars',
		decimalNumbers: true,
		namedPlaceholders: true,
	});

	const cars = [
		{
			registrationNo: 'SJZ77C6',
			brand: 'Jaguar',
			model: 'X-Type',
			color: 'White',
			firstRegistryAt: '2021-07-20',
			price: 180000
		},

		{
			registrationNo: 'RZ2165T',
			brand: 'BMW',
			model: 'X3',
			color: 'black pearl',
			firstRegistryAt: '2021-05-20',
			price: 220000
		},

		{
			registrationNo: 'RZ9128S',
			brand: 'Renault',
			model: 'Master',
			color: 'White',
			firstRegistryAt: '2018-09-20',
			price: 50000
		}
	];

	const statement = await connection.prepare('INSERT INTO `cars` VALUES(?, ?, ?, ?, ?, ?)');
	try {
		for (const car of cars) {
			await statement.execute(Object.values(car));
		}
		console.log('Działa!')
	} finally {
		statement.close();
	};

	
})();