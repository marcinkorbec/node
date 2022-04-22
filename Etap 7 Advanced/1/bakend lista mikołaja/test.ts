import {strict as assert} from "assert";

assert.deepStrictEqual({
    name: 'Ziutek',
    surname: 'Bezbutek',
  },
  {
    name: 'Ziutek',
    surname: 'Ziutkowy',
  }, 'To nie są te same osoby.');