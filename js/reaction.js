let timeBtn = 0;
let timeUp = 0;

function clickBtn() {
  let ClickBtn = document.getElementById("clickBtn");
  let timeCount = document.getElementById("timeCount");
  let color = document.getElementById("color");
  let sec = Math.floor(Math.random() * 5000) + 1000;
  if (timeBtn == 0) {
    setTimeout(() => {
      color.style.backgroundColor = "green";
      timeBtn++;
    }, sec);
  } else if (timeBtn == 1) {
    timeUp = 0;
    timeBtn = 0;
    clearTimeout(out);
  }
}

let out = setInterval(() => {
  if (timeBtn == 1) {
    timeCount.innerText = timeUp++;
  }
}, 1);

function restartBtn() {
  color.style.backgroundColor = "red";
  timeCount.innerText = 0;
}
