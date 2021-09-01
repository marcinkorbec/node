// npm i -D @types/node-fetch instalacja typów

const fetch = require('node-fetch');

// fetch('https://wp.pl')
//   .then(r => r.text())
//   .then(html => console.log(html));

const getDataFileName = city => safeJoin('./data/', `${city}.txt`);

// fetch('https://danepubliczne.imgw.pl/api/data/synop')
//   .then(r => r.json())
//   .then(data => console.log(data));

const processWeatcherData = async data => {
  const sorted = [...data].sort((a, b) => {
    if (b.temperatura > a.temperatura) {
      return 1;
    }
    if (a.temperatura > b.temperatura) {
      return -1;
    }
    return 0;
  });

  const {
    stacja: station,
    temperatura: temperature,
  } = sorted[0];

  console.log(`Najwyższa temperatura ${temperature} st. C jest aktualnie w ${station}.`);
}

const findWarmestPlaceInPoland = async () => {
  try {
    const res = await fetch('https://danepubliczne.imgw.pl/api/data/synop');
    const data = await res.json();
    await processWeatcherData(data);
  } catch(err) {
    console.log('Error has occured :D', error);
  }
}

findWarmestPlaceInPoland();

