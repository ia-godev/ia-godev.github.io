let clickNumber = 0;
let timerC = 0;
let i = 1;

function clickBtn() {
  timerC++;
  let clickBtn = document.getElementById("clickBtn");
  clickBtn.innerHTML = ++clickNumber;
  if (timerC == 1) {
    let countdown = setInterval(() => {
      let timeCount = document.getElementById("timeCount");
      timeCount.innerText = 10 - i;
      i++;
    }, 1000);
    setTimeout(() => {
      clearInterval(countdown);
    }, 11000);
    setTimeout(() => {
      let clickBtn = document.getElementById("clickBtn");
      clickBtn.innerHTML = "You do " + clickNumber / 10 + " cps";
      clickBtn.disabled = true;
    }, 10000);
  }
}

function restartBtn() {
  let timeCount = document.getElementById("timeCount");
  let clickBtn = document.getElementById("clickBtn");
  if (i == 11) {
    timerC = 0;
    i = 1;
    timeCount.innerText = 10;
    clickBtn.innerHTML = clickNumber = 0;
    clickBtn.disabled = false;
  }
}
