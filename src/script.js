const hoursElement = document.querySelector('[data-hours]');
const minutesElement = document.querySelector('[data-minutes]');
const secondsElement = document.querySelector('[data-seconds]');
const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
const restButton = document.querySelector('[data-reset]');
function countTime() {
  let seconds = (minutes = hours = 0);
  return () => {
    seconds++;
    if (seconds >= 60) {
      minutes++;
      seconds = 0;
    }
    if (minutes >= 60) {
      hours++;
      minutes = 0;
    }
    if (minutes >= 24) {
      hours = 0;
    }
    seconds < 10
      ? (secondsElement.textContent = `:0${seconds}`)
      : (secondsElement.textContent = `:${seconds}`);
    minutes < 10
      ? (minutesElement.textContent = `:0${minutes}`)
      : (minutesElement.textContent = `${minutes}`);
    hours < 10
      ? (hoursElement.textContent = `0${hours}`)
      : (hoursElement.textContent = `${hours}`);
  };
}
let countTimeFun = countTime();
let interval;
function pauseStopWatch() {
  clearInterval(interval);
}
function startStopWatch() {
  interval = setInterval(countTimeFun, 1000);
}
function resetStopWatch() {
  hoursElement.textContent = '00';
  minutesElement.textContent = ':00';
  secondsElement.textContent = ':00';
  pauseStopWatch();
  countTimeFun = countTime();
}
startButton.addEventListener('click', startStopWatch);
stopButton.addEventListener('click', pauseStopWatch);
restButton.addEventListener('click', resetStopWatch);
