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
			registrationNo: 'SJZ7CC6',
			brand: 'Jaguar',
			model: 'X-Type',
			color: 'White',
			firstRegistryAt: '2021-07-20',
			price: 180000
		},

		{
			registrationNo: 'SJZ7CC9',
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

	const {affectedRows} = (
		await connection.execute(
			'UPDATE `cars` SET `price` = `price` + :myValue WHERE `price` > :myValue',
			{
				myValue: value,
			},
		)
	)[0];
	console.log(affectedRows);
})();