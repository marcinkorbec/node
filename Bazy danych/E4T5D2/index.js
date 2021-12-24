const {db} = require('./utils/db')

(async() => {
	db.collection('xyz').find();
})();