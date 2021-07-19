//-------------------------------------------------------------------------------
//                                   ZWYKŁA PĘTLA
//-------------------------------------------------------------------------------

const ar = [1, 2, 3];
{
  for (let licznik = 0; licznik < ar.length; licznik++) {
    const number = ar[licznik];
    //console.log(number);
  }
}

//-------------------------------------------------------------------------------
//                                    FOR EACH
//-------------------------------------------------------------------------------
{
  ar.forEach((number) => {
    //console.log(number);
  })
}

//-------------------------------------------------------------------------------
//                                  PĘTLA FOR OF
//-------------------------------------------------------------------------------
{
  for (const number of ar) {
    //console.log(number);
  }

  //-----------------------------------------------------------------------------
  // for (const element of ar) {
  //   ar.push(element); //pętla nieskończona
  // }
}

//-------------------------------------------------------------------------------
//                             Iterowanie po obiekcie
//-------------------------------------------------------------------------------
{
  const obj = {
    name: 'Marcin',
    surname: 'Korbecki',
    age: 33,
  };

  const keys = Object.keys(obj);
  //console.log(keys);

  const values = Object.values(obj);
  //console.log(values);

  const entries = Object.entries(obj);
  //console.log(entries);

  for (const entry of entries) {
    const [name, value] = entry;
    //console.log(name, value);
    //console.log(entry);
  }

  for (const [name, value] of keys) {
    //console.log(name, value);
    //console.log(entry);
  }

  for (const [name, value] of entries) {
    //console.log(name, value);
    //console.log(entry);
  }

  for (const key of keys) {
    // console.log(key, obj[key]);
  }

//----------------------FOR IN------------------------------------------------------

  for (const key in obj) {
    // console.log(key);
    // console.log(obj[key]);
  }

}


//----------------------------------------------------------------------------------
//                              Array.reduce
//----------------------------------------------------------------------------------

{
  const ar = [1, 2, 3];

  const sum = ar.reduce((prev, el) => {
    return prev + el;
  }, 0);

  //console.log(sum); //6
}

{
  const ar = [1, 2, 3];

  const sum = ar.reduce((a, b) => {
    return a + b;
  }, 0);

  //console.log(sum); //6
}

{
  const ar = ['Anna', 'Andrzej', 'Bartłomiej', 'Jakub', 'Barbara'];

  const name = ar.reduce((prev,curr) => {
    if (curr[0] === 'B') {
      return `${prev} ${curr}`;
    } else {
      return prev;
    }
  }, '')

  //console.log(name);

  const namesLength = ar.reduce((prev,curr) => {
    return prev + curr.length;
  }, 0);

  console.log(namesLength);
}










