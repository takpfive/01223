
let timer;
let isRunning = false;
let elapsedTime = 0; // elapsed time in milliseconds
let startTime;

const display = document.getElementById("display");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

startButton.addEventListener("click", () => {
  if (!isRunning) {
    isRunning = true;
    startTime = Date.now() - elapsedTime;
    timer = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      updateDisplay();
    }, 1000);
  }
});

stopButton.addEventListener("click", () => {
  if (isRunning) {
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
    isRunning = false;
  }
});

resetButton.addEventListener("click", () => {
  clearInterval(timer);
  isRunning = false;
  elapsedTime = 0;
  updateDisplay();
});

function updateDisplay() {
  const totalSeconds = Math.floor(elapsedTime / 1000);
  const hours = Math.floor(totalSeconds / 3600).toString().padStart(2, "0");
  const minutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, "0");
  const seconds = (totalSeconds % 60).toString().padStart(2, "0");
  display.textContent = `${hours}:${minutes}:${seconds}`;
}
