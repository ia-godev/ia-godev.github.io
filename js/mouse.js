var clickNumber = 0;
var timerC = 0;

function clickNm() {
  timerC = timerC + 1;
  var clickBtn = document.getElementById("clickBtn");
  console.log(clickBtn);
  clickBtn.innerHTML = ++clickNumber;
}

function restartNm() {
  var clickBtn = document.getElementById("clickBtn");
  clickBtn.innerHTML = clickNumber = 0;
  clickBtn.disabled = false;
  timerC = 0;
}

function ifTimer() {
  if (timerC == 1) {
    setTimeout(fin, 10000);
  }
}

function fin() {
  var clickBtn = document.getElementById("clickBtn");
  clickBtn.innerHTML = "You do " + clickNumber / 10 + " cps";
  clickBtn.disabled = true;
}
