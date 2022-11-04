let timeCount = 0;
let i = 1;

function randomInt(min, max) {
  return String(Math.floor(Math.random() * max) + min);
}

function clickTarget() {
  let target = document.getElementById("target");
  let result = document.getElementById("result");
  target.style.position = "absolute";
  target.style.top = randomInt(20, 40) + "vh";
  target.style.left = randomInt(10, 80) + "vw";
  timeCount++;
  if (timeCount == 1) {
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
      result.innerText = timeCount / 10 + " target per seconds";
    }, 10000);
  }
}

function restartBtn() {
  let timeCount = document.getElementById("timeCount");
  let target = document.getElementById("target");
  let result = document.getElementById("result");
  if (i == 11) {
    i = 1;
    timeCount = -1;
    result.innerText = null;
    target.style.zIndex = "1";
    timeCount.innerText = "10";
    clickTarget();
  }
}