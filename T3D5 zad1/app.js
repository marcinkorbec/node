{
  const btn1 = document.querySelector('.first-btn');
  const btn2 = document.querySelector('.second-btn');

  const good = document.querySelector('.good');
  const bad = document.querySelector('.bad');


//------DOWNLOAD VARIABLE FROM LOCAL STORAGE------------------------------------------

  let click1 = Number(localStorage.getItem('counter-good'));
  good.innerText = click1;

  let click2 = Number(localStorage.getItem('counter-bad'));
  bad.innerText = click2;

  if (click1 === null) {
    good.innerText = 0;
  } else if (click2 === null) {
    bad.innerText = 0;
  }

//------SETTING THE LISTENING TO THE BUTTONS------------------------------------------

  btn1.addEventListener('click', () => {
    let counterGood = ++click1;
    good.innerText = counterGood;
    localStorage.setItem('counter-good', String(counterGood));
  });

  btn2.addEventListener('click', () => {
    let counterBad = ++click2;
    bad.innerText = counterBad;
    localStorage.setItem('counter-bad', String(counterBad));
  });
}
//-----------------------------------------------------------------------------------
//        2. OBJECT IN LOCALSTORAGE VERSION
//-----------------------------------------------------------------------------------
{
  const btn1 = document.querySelector('.btn-3');
  const btn2 = document.querySelector('.btn-4');

  const good = document.querySelector('.moodGood');
  const bad = document.querySelector('.moodBad');
  const feelingInfo = localStorage.getItem('feelingInfo');

  //-----CHECK TYPE OF LOCALSTORAGE FEELING INFO and setting to localstorage---------

  if (feelingInfo === null) {
    let dataObj = {
      moodGood: 0,
      moodBad: 0,
    };
    good.innerText = dataObj.moodGood.toString();
    bad.innerText = dataObj.moodBad.toString();
    localStorage.setItem('feelingInfo', JSON.stringify(dataObj));
  }

  const parseDataObj = JSON.parse(localStorage.getItem('feelingInfo'));
  good.innerText = parseDataObj.moodGood.toString();
  bad.innerText = parseDataObj.moodBad.toString();

  //------SETTING THE LISTENING TO THE BUTTONS--------------------------------------

  btn1.addEventListener('click', () => {
    parseDataObj.moodGood++;
    good.innerText = parseDataObj.moodGood.toString();
    localStorage.setItem('feelingInfo', JSON.stringify(parseDataObj));
  })

  btn2.addEventListener('click', () => {
    parseDataObj.moodBad++;
    bad.innerText = parseDataObj.moodBad.toString();
    localStorage.setItem('feelingInfo', JSON.stringify(parseDataObj));
  })

}