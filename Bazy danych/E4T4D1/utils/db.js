const mysql = require('mysql2/promise');

const pool = mysql.createPool({
	host: 'localhost',
	user: 'root',
	database: 'megak_course',
	decimalNumbers: true,
	namedPlaceholders: true,
	bigNumberStrings: false,
});

module.exports = {
	pool,
};