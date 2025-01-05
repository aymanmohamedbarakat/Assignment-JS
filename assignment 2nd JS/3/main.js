let tempScreen = document.querySelector("#tempScreen");
let fanScreen = document.querySelector("#fanScreen");
let lightScreen = document.querySelector(".screen");

let acTemp = 16;
let acStatus = false;
let Fan = 1;
let MaxFanSpeed = 3;

function toggleAc() {
  acStatus = !acStatus;

  if (acStatus) {
    lightScreen.style.backgroundColor = "#28a3e6";
    tempScreen.innerText = acTemp;
    fanScreen.innerText = Fan;
  } else {
    lightScreen.style.backgroundColor = "grey";
    tempScreen.innerText = "--";
    fanScreen.innerText = "--";
  }
}

function incrementTemp() {
  if (!acStatus) return;
  if (acTemp < 30) {
    acTemp++;
    tempScreen.innerText = acTemp;
  }
}
function decrementTemp() {
  if (!acStatus) return;
  if (acTemp > 16) {
    acTemp--;
    tempScreen.innerText = acTemp;
  }
}

function toggleFan() {
  if (!acStatus) return;
  if (acStatus < 3) {
    Fan++;
    if (Fan > 3) {
      Fan = 1;
    }
    fanScreen.innerText = Fan;
  }
}


















