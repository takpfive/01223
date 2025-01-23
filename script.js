
let timer;
let isRunning = false;
let elapsedTime = 0;

const display = document.getElementById("display");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

startButton.addEventListener("click", () => {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      elapsedTime++;
      updateDisplay();
    }, 1000);
  }
});

stopButton.addEventListener("click", () => {
  clearInterval(timer);
  isRunning = false;
});

resetButton.addEventListener("click", () => {
  clearInterval(timer);
  isRunning = false;
  elapsedTime = 0;
  updateDisplay();
});

function updateDisplay() {
  const hours = Math.floor(elapsedTime / 3600).toString().padStart(2, "0");
  const minutes = Math.floor((elapsedTime % 3600) / 60).toString().padStart(2, "0");
  const seconds = (elapsedTime % 60).toString().padStart(2, "0");
  display.textContent = `${hours}:${minutes}:${seconds}`;
}
