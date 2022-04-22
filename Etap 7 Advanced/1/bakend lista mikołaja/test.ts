import {strict as assert} from "assert";
import {buildPerson} from "./utils/foobar";

assert.doesNotThrow(
  () => buildPerson('Marcin','Testowy'),
  'buildPerson() throws. '
);

assert.deepStrictEqual(
  buildPerson('Ziutek', 'Ziutkowy'),
  {
    name: 'Ziutek',
    surname: 'Ziutkowy',
  }, 'To nie są te same osoby.');

// import {strict as assert} from "assert";
//
// assert.deepStrictEqual([1,2,3], [1,3,2])


// assert.rejects(
//   () => buildPerson('',''),
//   {
//     message: 'Name and surname should not be empty.'
//   },
//   'buildPerson() does not throw message when empty name or surname. ');