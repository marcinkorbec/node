const {Router} = require('express');
const {ChildRecord} = require("../records/child-record");
const {GiftRecord} = require("../records/gift-record");

const childRouter = Router();

childRouter
	.get('/', async (req, res) => {
		const childrenList = await ChildRecord.listAll();
		const giftsList = await GiftRecord.listAll();

		res.render('children/children-list.hbs', {
			childrenList,
			giftsList,
		});
	})

	.patch('/gift/:childId', async (req, res) => {
		const child - await ChildRecord.getOne(req.params.childId)

		if (child === null) {
			throw new ValidationError('Nie znaleziono dziecka o podanym ID.')
		};

		const gift = req.body.giftId === '' ? null : await GiftRecord.getOne(req.body.giftId);

		if (gift) {
			if (gift.count<= await gift.countGivenGifts()) {
				throw new ValidationError('Tego prezentu jest za mało.')
			}
			console.log();
		}

		child.giftId = gift === null ? null : gift.id
		await child.update();

		res.redirect('/children');
	});

module.exports = {
	childRouter,
}