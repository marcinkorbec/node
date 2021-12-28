const {Router} = require('express');
const {ChildRecord} = require("../records/child-record");

const childRouter = Router();

childRouter
	.get('/', async (req, res) => {
		const childrenList = await ChildRecord.listAll();
		const giftsList = await GiftRecord.listAll();

		res.render('children/children-list.hbs', {
			childrenList,
			giftsList,
		});
	});

module.exports = {
	childRouter,
}