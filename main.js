window.addEventListener('keydown', (event) => {
  if (event.keyCode == 65) {
    var clapA = new Audio('./sounds/clap.wav');
    clapA.play();
    document.getElementById('clapA').style.transform = 'rotate(360deg)';
    document.getElementById('clapA').style.transitionDuration = '3s';
    
  }else if (event.keyCode == 83) {
    var hiHatS = new Audio('./sounds/hiHat.wav');
    hiHatS.play();
    document.getElementById('hiHatS').style.transform = 'rotate(360deg)';
    document.getElementById('hiHatS').style.transitionDuration = '7s';
  } else if (event.keyCode == 83) {
    var hiHatS = new Audio('./sounds/hiHat.wav');
    hiHatS.play();
    document.getElementById('hiHatS').style.transform = 'rotate(360deg)';
    document.getElementById('hiHatS').style.transitionDuration = '7s';
  } else if (event.keyCode == 68) {
    var kickD = new Audio('./sounds/kick.wav');
    kickD.play();
    document.getElementById('kickD').style.transform = 'rotate(360deg)';
    document.getElementById('kickD').style.transitionDuration = '2s';
  } else if (event.keyCode == 70) {
    var openHatF = new Audio('./sounds/openHat.wav');
    openHatF.play();
    document.getElementById('openHatF').style.transform = 'rotate(360deg)';
    document.getElementById('openHatF').style.transitionDuration = '4s';
  } else if (event.keyCode == 71) {
    var boomG = new Audio('./sounds/boom.wav');
    boomG.play();
    document.getElementById('boomG').style.transform = 'rotate(360deg)';
    document.getElementById('boomG').style.transitionDuration = '5s';
  } else if (event.keyCode == 72) {
    var rideH = new Audio('./sounds/ride.wav');
    rideH.play();
    document.getElementById('rideH').style.transform = 'rotate(360deg)';
    document.getElementById('rideH').style.transitionDuration = '6s';
  } else if (event.keyCode == 74) {
    var snareJ = new Audio('./sounds/snare.wav');
    snareJ.play();
    document.getElementById('snareJ').style.transform = 'rotate(360deg)';
    document.getElementById('snareJ').style.transitionDuration = '3s';
  } else if (event.keyCode == 75) {
    var tomK = new Audio('./sounds/tom.wav');
    tomK.play();
    document.getElementById('tomK').style.transform = 'rotate(360deg)';
    document.getElementById('tomK').style.transitionDuration = '4s';
  } else if (event.keyCode == 76) {
    var tinkL = new Audio('./sounds/tink.wav');
    tinkL.play();
    document.getElementById('tinkL').style.transform = 'rotate(360deg)';
    document.getElementById('tinkL').style.transitionDuration = '2s';
  } else {
    location.reload();
  }
});
