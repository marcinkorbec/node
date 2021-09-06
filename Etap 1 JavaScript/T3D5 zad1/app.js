//-----------------------------------------------------------------------------------
//       COUNTER OF CLICKS
//-----------------------------------------------------------------------------------

{
  const goodBtn = document.querySelector('.first-btn');
  const badBtn = document.querySelector('.second-btn');

  const good = document.querySelector('.good');
  const bad = document.querySelector('.bad');


//------DOWNLOAD VARIABLE FROM LOCAL STORAGE------------------------------------------
  let counterGood = Number(localStorage.getItem('counter-good'));
  let counterBad = Number(localStorage.getItem('counter-bad'));

//-------SHOW AND SAVE INFO-----------------------------------------------------------
  function showInfo() {  
    good.innerText = counterGood;
    bad.innerText = counterBad;
      if (counterGood === null) {
        good.innerText = 0;
      } else if (counterBad === null) {
        bad.innerText = 0;
      }
  }

  function saveInfo() {
    localStorage.setItem('counter-good', String(counterGood));
    localStorage.setItem('counter-bad', String(counterBad));
  }
  showInfo();
  

//------SETTING THE LISTENING TO THE BUTTONS------------------------------------------

  goodBtn.addEventListener('click', () => {
    ++counterGood;
    showInfo();
    saveInfo();
  });

  badBtn.addEventListener('click', () => {
    ++counterBad;
    showInfo();
    saveInfo();
  });
}
//-----------------------------------------------------------------------------------
//        2. OBJECT IN LOCALSTORAGE VERSION
//-----------------------------------------------------------------------------------
{
  const goodBtn = document.querySelector('.btn-3');
  const badBtn = document.querySelector('.btn-4');

  const goodSpan = document.querySelector('.moodGood');
  const badSpan = document.querySelector('.moodBad');
  
  const feelingInfo = localStorage.getItem('feelingInfo');

  //-----CHECK TYPE OF LOCALSTORAGE FEELING INFO and setting to localstorage---------

  if (feelingInfo === null) {
    let counter = {
      moodGood: 0,
      moodBad: 0,
    }
    goodSpan.innerText = counter.moodGood.toString();
    badSpan.innerText = counter.moodBad.toString();
    localStorage.setItem('feelingInfo', JSON.stringify(counter));
  }

  const counterFromLocalStorage = JSON.parse(localStorage.getItem('feelingInfo'));

  function showInfo() {
    goodSpan.innerText = counterFromLocalStorage.moodGood.toString();
    badSpan.innerText = counterFromLocalStorage.moodBad.toString();
  };
  showInfo();

  function saveInfo() {
    localStorage.setItem('feelingInfo', JSON.stringify(counterFromLocalStorage));
  }
  

  //------SETTING THE LISTENING TO THE BUTTONS--------------------------------------

  goodBtn.addEventListener('click', () => {
    counterFromLocalStorage.moodGood++;
    showInfo();
    saveInfo();
  })

  badBtn.addEventListener('click', () => {
    counterFromLocalStorage.moodBad++;
    showInfo();
    saveInfo();
  })

}
//----------------------------------------------------------------------------------
//      3. ARRAY IN LOCALSTORAGE, SUM AND GETTING ITEMS FROM ARRAY TO HTML
//----------------------------------------------------------------------------------
{
  const btn = document.querySelector('.last-btn');
  const output = document.querySelector('.sum');
  const numbersInput = document.querySelector('.array')
  let numberInfoArray = JSON.parse(localStorage.getItem('numbers-info')) || new Array();

  function getArray() {
    numbersInput.innerText = ` ${numberInfoArray}`;
  }
  getArray();

  function sumCounts() {
    let sum = 0;
    numberInfoArray.forEach(num => sum+=Number(num));
    output.innerText = sum;
  };
  sumCounts();

  function getNumber() {
    const newNumber = prompt('Podaj Liczbę!');
    numberInfoArray.push(newNumber);
    localStorage.setItem('numbers-info', JSON.stringify(numberInfoArray));
    sumCounts();
    getArray();
  }

  btn.addEventListener('click', getNumber)
}