let color = document.getElementById("color");
let timeCount = document.getElementById("timeCount");
let clickCount = 0;
let timer = 0;

function clickBtn() {
  let timerCount = setInterval(() => {
    if (clickCount == 1) {
      timeCount.innerText = ++timer / 100;
    }
  }, 10);
  if (clickCount == 0) {
    let sec = Math.floor(Math.random() * 3000) + 1000;
    setTimeout(() => {
      color.style.backgroundColor = "green";
      clickCount++;
    }, sec);
  } else if (clickCount == 1) {
    clearInterval(timerCount);
    clickCount++;
  }
}
function restartBtn() {
  color.style.backgroundColor = "red";
  timeCount.innerText = 0;
  clickCount = 0;
  timer = 0;
  location.reload();
}
