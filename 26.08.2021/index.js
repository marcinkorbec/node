// npm i -D @types/node-fetch instalacja typów

const fetch = require('node-fetch');

// fetch('https://wp.pl')
//   .then(r => r.text())
//   .then(html => console.log(html));

const cityName = 'Rzeszów'; //process.argv[2];

// fetch('https://danepubliczne.imgw.pl/api/data/synop')
//   .then(r => r.json())
//   .then(data => console.log(data));

const processWeatcherData = data => {
  // const data.find(stationData => {
  //   if (stationData.stacja === cityName) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // })

  const foundData = data.find(stationData => stationData.stacja === cityName);

  if (!foundData) {
    console.log('Takiego miasta nasze API nie przewidziało :(');
    return;
  }
  const {
    cisnienie: pressure,
    wilgotnosc_wzgledna: humidity,
    temperatura: temperature,
  } = foundData;

  const weatherInfo = `W mieście ${cityName} jest: ${temperature}°C, wilgotność: ${humidity}, oraz ciśnienie: ${pressure} hPa.`

  console.log(weatherInfo);
}

fetch('https://danepubliczne.imgw.pl/api/data/synop')
  .then(r => r.json())
  .then(processWeatcherData);