let clickNumber = 0;
let timerC = 0;
let i = 0;

function clickBtn() {
  let mainContainer = document.getElementById("main-container");
  let timeCount = document.getElementById("timeCount");
  mainContainer.innerHTML = ++clickNumber;
  timerC++;
  if (timerC == 1) {
    let countdown = setInterval(() => {
      timeCount.innerText = 10 - ++i;
    }, 1000);
    setTimeout(() => {
      clearInterval(countdown);
    }, 11000);
    setTimeout(() => {
      mainContainer.innerHTML = "You do " + clickNumber / 10 + " cps";
      mainContainer.disabled = true;
    }, 10000);
  }
}

function restartBtn() {
  let timeCount = document.getElementById("timeCount");
  let mainContainer = document.getElementById("main-container");
  if (i == 10) {
    timerC = 0;
    i = 0;
    timeCount.innerText = 10;
    mainContainer.innerHTML = clickNumber = 0;
    mainContainer.disabled = false;
  }
}
