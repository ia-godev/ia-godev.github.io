theme = 0;

loadBtn();
eventListener();
toogleTheme();

function loadBtn() {
  let body = document.getElementById("body");
  let themeBtn = document.createElement("button");
  let moon = document.createElement("div");
  let moon2 = document.createElement("div");
  themeBtn.classList = "theme";
  themeBtn.id = "theme";
  moon.classList = "moon";
  moon.id = "moon";
  moon2.classList = "moon2";
  moon2.id = "moon2";
  body.appendChild(themeBtn);
  themeBtn = document.getElementById("theme");
  themeBtn.appendChild(moon);
  themeBtn.appendChild(moon2);
}

function eventListener() {
  let themeBtn = document.getElementById("theme");
  themeBtn.addEventListener("click", () => {
    toogleTheme();
  });
}

function toogleTheme() {
  let moon = document.getElementById("moon");
  let moon2 = document.getElementById("moon2");
  let body = document.getElementById("body");
  let targetNb = document.getElementById("targetNb");
  let time = document.getElementById("time");
  let mainContainer = document.getElementById("main-container");
  let restartBtn = document.getElementById("restartBtn");
  let containerUnderpages = document.getElementById("container-underpages");
  let pNb = 1;
  if (theme == 1) {
    theme--;
    moon.style.backgroundColor = "var(--light-bg-color)";
    moon2.style.backgroundColor = "var(--dark-bg-color)";
    body.style.backgroundColor = "var(--dark-bg-color)";
    body.style.color = "var(--dark-font-color)";
    if (mainContainer != null) {
      mainContainer.style.backgroundColor = "var(--dark-bg-element-color)";
      mainContainer.style.color = "var(--dark-font-color)";
      restartBtn.style.backgroundColor = "var(--dark-bg-element-color)";
      restartBtn.style.color = "var(--dark-font-color)";
      if (time != null) {
        if (targetNb != null) {
          targetNb.style.backgroundColor = "var(--dark-bg-element-color)";
          targetNb.style.color = "var(--dark-font-color)";
        }
        time.style.backgroundColor = "var(--dark-bg-element-color)";
        time.style.color = "var(--dark-font-color)";
      }
    } else if (containerUnderpages != null) {
      while (
        pNb <= document.getElementById("container-underpages").childElementCount
      ) {
        document.getElementById("underpages" + pNb).style.backgroundColor =
          "var(--dark-bg-element-color)";
        document.getElementById("underpages" + pNb++).style.color =
          "var(--dark-font-color)";
      }
    }
  } else if (theme == 0) {
    theme++;
    moon.style.backgroundColor = "var(--dark-bg-color)";
    moon2.style.backgroundColor = "var(--light-bg-color)";
    body.style.backgroundColor = "var(--light-bg-color)";
    body.style.color = "var(--light-font-color)";
    if (mainContainer != null) {
      mainContainer.style.backgroundColor = "var(--light-bg-element-color)";
      mainContainer.style.color = "var(--light-font-color)";
      restartBtn.style.backgroundColor = "var(--light-bg-element-color)";
      restartBtn.style.color = "var(--light-font-color)";
      if (time != null) {
        if (targetNb != null) {
          targetNb.style.backgroundColor = "var(--light-bg-element-color)";
          targetNb.style.color = "var(--light-font-color)";
        }
        time.style.backgroundColor = "var(--light-bg-element-color)";
        time.style.color = "var(--light-font-color)";
      }
    } else if (containerUnderpages != null) {
      while (
        pNb <= document.getElementById("container-underpages").childElementCount
      ) {
        document.getElementById("underpages" + pNb).style.backgroundColor =
          "var(--light-bg-element-color)";
        document.getElementById("underpages" + pNb++).style.color =
          "var(--light-font-color)";
      }
    }
  }
}
