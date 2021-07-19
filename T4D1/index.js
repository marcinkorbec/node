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
  console.log(keys);

  const values = Object.values(obj);
  console.log(values);

  const entries = Object.entries(obj);
  console.log(entries);

  for (const entry of entries) {
    console.log(entry);
  }
}
//