let x = 0;
let y = 0;

function restartBtn() {
  spawnTarget();
}

function randomInt(min, max) {
  return String(Math.floor(Math.random() * max) + min);
}

function spawnTarget() {
  let target = document.getElementById("target");
  target.style.position = "absolute";
  target.style.top = randomInt(20, 40) + "vh";
  target.style.left = randomInt(10, 80) + "vw";
}

document.addEventListener("keydown", (e) => {
  let snake = document.getElementById("snake");
  if (e.key == "z") {
    if (y != -200) {
      y = y - 10;
      snake.style.transform =
        "translate(" + String(x) + "px," + String(y) + "px)";
    }
  } else if (e.key == "s") {
    if (y != 200) {
      y = y + 10;
      snake.style.transform =
        "translate(" + String(x) + "px," + String(y) + "px)";
    }
  } else if (e.key == "q") {
    if (x != -200) {
      x = x - 10;
      snake.style.transform =
        "translate(" + String(x) + "px," + String(y) + "px)";
    }
  } else if (e.key == "d") {
    if (x != 200) {
      x = x + 10;
      snake.style.transform =
        "translate(" + String(x) + "px," + String(y) + "px)";
    }
  }
});
