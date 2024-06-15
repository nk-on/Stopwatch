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
const countTimeFun = countTime();
function startStopWatch() {
  const interval = setInterval(countTimeFun, 1000);
  function pauseStopWatch() {
    clearInterval(interval);
  }
  stopButton.addEventListener('click', pauseStopWatch);
}
function resetStopWatch() {
  hoursElement.textContent = '00';
  minutesElement.textContent = ':00';
  secondsElement.textContent = ':00';
}
startButton.addEventListener('click', startStopWatch);
restButton.addEventListener('click', resetStopWatch);
