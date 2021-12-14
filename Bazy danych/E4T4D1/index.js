const {pool} = require('./utils/db.js')

(async() => {
	await pool.end(); 
})();