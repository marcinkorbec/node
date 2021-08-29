// npm i -D @types/node-fetch instalacja typów

const fetch = require('node-fetch');
const { appendFile } = require('fs').promises;
const { normalize, resolve } = require('path');

// fetch('https://wp.pl')
//   .then(r => r.text())
//   .then(html => console.log(html));

const cityName = 'Rzeszów'; //process.argv[2];

function safeJoin(base, target) {
  const targetPatch = '.' + normalize('/' + target)
  return resolve(base, targetPatch);
}

const getDataFileName = city => safeJoin('.', `${city}.txt`);

// fetch('https://danepubliczne.imgw.pl/api/data/synop')
//   .then(r => r.json())
//   .then(data => console.log(data));

const processWeatcherData = async data => {
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
  const dateTimeString = new Date().toLocaleString();
  await appendFile(getDataFileName(cityName), `${dateTimeString}\n${weatherInfo}\n`)
}

fetch('https://danepubliczne.imgw.pl/api/data/synop')
  .then(r => r.json())
  .then(processWeatcherData);
  .catch(error => {
  console.log('Error has occured :D', error);
})