import {ChildRecord} from "../records/child.record";

// const myMock = jest
//   .spyOn(ChildRecord, 'getOne')
//   .mockImplementation(async (id: string)=> {
//     return new ChildRecord( {
//       id,
//       name: 'Testowy',
//       giftId: '123',
//     });
//   });

let child: ChildRecord;

beforeAll(async ()=> {
  child = await ChildRecord.getOne('77777777');
})

jest
  .spyOn(ChildRecord, 'getOne')
  .mockImplementation(async (id: string)=> {
    return new ChildRecord({
      id,
      name: "Marcin",
      giftId: '123',
    })
  })

jest
  .spyOn(ChildRecord.prototype, 'update')
  .mockImplementation(async ()=> {});

test('foobar test test', async ()=> {
  const child = await ChildRecord.getOne('88888888');
  await child.update();
})

test('foobar test test', async ()=> {
  const child = ChildRecord.getOne('123');
  console.log(child)
  expect(child).toBeDefined();
})