import {GiftRecord} from "../records/gift.record";
import {pool} from "../utils/db";

let gift: GiftRecord;

beforeAll( ()=> {
  // 1. Wyczyść całą testowaną tabele bazy danych.
  // 2. Zwróć przewidywalne dane (po prostu zdefiniowane na stałe).
  gift = new GiftRecord({
    name: 'Tester',
    count: 1,
  });
  
})

afterAll(async ()=> {
  await pool.end();
})

test('Not inserted GiftRecord should have no id',  ()=> {
  console.log(gift.id)
  expect(gift.id).toBeUndefined();
})

test('Inserted GiftRecord should have an id', async ()=> {
  
  await gift.insert();
  expect(gift.id).toBeDefined();
  expect(gift.id).toMatch(/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/);
})