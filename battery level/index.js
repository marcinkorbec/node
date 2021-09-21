const batteryLevel = require('battery-level');

batteryLevel()
  .then(level => {
    const batLevel = (level*100);
    console.log(batLevel.toString() + '%');
  //=> 0.55
})

setInterval(batteryLevel, 1000);
