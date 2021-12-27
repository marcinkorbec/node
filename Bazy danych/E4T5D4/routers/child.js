const {Router} = require('express');
const {ChildRecord} = require("../records/child-record");

const childRouter = Router();

childRouter
	.get('/', (req, res) => {
		const childrenList = ChildRecord.listAll();
		const giftsList = GiftRecord.listAll();

		res.render('children/children-list.hbs', {
			childrenList,
			giftsList,
		});
	});

module.exports = {
	childRouter,
}