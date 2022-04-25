import {GiftRecord} from "../records/gift.record";
import {pool} from "../utils/db";

afterAll(async ()=> {
  await pool.end();
})

test('Inserted GiftRecord should have an id', async ()=> {
  const gift = new GiftRecord({
    name: 'Tester',
    count: 1,
  });
  
  await gift.insert()
  
  expect(gift.id).toBeDefined();
  expect(gift.id).toMatch(/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/);
})