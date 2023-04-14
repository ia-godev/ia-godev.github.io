let timeC = -1;
let i = 1;

function randomInt(min, max) {
  max++;
  if (Math.floor(Math.random() * 2) + 0 == 0) {
    return String((Math.floor(Math.random() * max) + min) * -1);
  } else {
    return String(Math.floor(Math.random() * max) + min);
  }
}

clickTarget();
function clickTarget() {
  let target = document.getElementById("target");
  let result = document.getElementById("result");
  target.style.position = "relative";
  target.style.top = randomInt(0, 30) + "vh";
  target.style.left = randomInt(0, 30) + "vw";
  timeC++;
  let targetNb = document.getElementById("targetNb");
  targetNb.innerText = timeC;
  if (timeC == 1) {
    let countdown = setInterval(() => {
      let timeCount = document.getElementById("timeCount");
      timeCount.innerText = 10 - i;
      i++;
    }, 1000);
    setTimeout(() => {
      clearInterval(countdown);
    }, 11000);
    setTimeout(() => {
      target.style.zIndex = "-1";
      result.innerText = timeC / 10 + " target per seconds";
    }, 10000);
  }
}

function restartBtn() {
  let timeCount = document.getElementById("timeCount");
  let target = document.getElementById("target");
  let result = document.getElementById("result");
  if (i == 11) {
    i = 1;
    timeC = -1;
    result.innerText = null;
    target.style.zIndex = "1";
    timeCount.innerText = 10;
    clickTarget();
  }
}
