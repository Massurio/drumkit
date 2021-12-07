window.addEventListener('keydown', (event) => {
  if (event.keyCode == 65) {
    var clapA = new Audio('./sounds/clap.wav');
    clapA.play();
  } else if (event.keyCode == 83) {
    var hiHatS = new Audio('./sounds/hiHat.wav');
    hiHatS.play();
  } else if (event.keyCode == 68) {
    var kickD = new Audio('./sounds/kick.wav');
    kickD.play();
  } else if (event.keyCode == 70) {
    var openHatF = new Audio('./sounds/openHat.wav');
    openHatF.play();
  } else if (event.keyCode == 71) {
    var boomG = new Audio('./sounds/boom.wav');
    boomG.play();
  } else if (event.keyCode == 72) {
    var rideH = new Audio('./sounds/ride.wav');
    rideH.play();
  } else if (event.keyCode == 74) {
    var snareJ = new Audio('./sounds/snare.wav');
    snareJ.play();
  } else if (event.keyCode == 75) {
    var tomK = new Audio('./sounds/tom.wav');
    tomK.play();
  } else if (event.keyCode == 76) {
    var tinkL = new Audio('./sounds/tink.wav');
    tinkL.play();
  }
});
const clapA = document.getElementById('clapA');
clapA.addEventListener('click', () => {
  console.log('Hello');
  var clapA = new Audio('./sounds/clap.wav');
  clapA.play();
});
const hiHatS = document.getElementById('hiHatS');
hiHatS.addEventListener('click', () => {
  console.log('Hello');
  var hiHatS = new Audio('./sounds/hiHat.wav');
  hiHatS.play();
});
const kickD = document.getElementById('kickD');
kickD.addEventListener('click', () => {
  console.log('Hello');
  var kickD = new Audio('./sounds/kick.wav');
  kickD.play();
});
const openHatF = document.getElementById('openHatF');
openHatF.addEventListener('click', () => {
  console.log('Hello');
  var openHatF = new Audio('./sounds/openHat.wav');
  openHatF.play();
});
const boomG = document.getElementById('boomG');
boomG.addEventListener('click', () => {
  console.log('Hello');
  var boomG = new Audio('./sounds/boom.wav');
  boomG.play();
});
const rideH = document.getElementById('rideH');
rideH.addEventListener('click', () => {
  console.log('Hello');
  var rideH = new Audio('./sounds/ride.wav');
  rideH.play();
});
const snareJ = document.getElementById('snareJ');
snareJ.addEventListener('click', () => {
  console.log('Hello');
  var snareJ = new Audio('./sounds/snare.wav');
  snareJ.play();
});
const tomK = document.getElementById('tomK');
tomK.addEventListener('click', () => {
  console.log('Hello');
  var tomK = new Audio('./sounds/tom.wav');
  tomK.play();
});
const tinkL = document.getElementById('tinkL');
tinkL.addEventListener('click', () => {
  console.log('Hello');
  var tinkL = new Audio('./sounds/tink.wav');
  tinkL.play();
});
