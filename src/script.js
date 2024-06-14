const hoursElement = document.querySelector('[data-hours]');
const minutesElement = document.querySelector('[data-minutes]');
const secondsElement = document.querySelector('[data-seconds]');
const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
///stopwatch should display time elapsed after clicking start buttton
//run set timeout function
//increase count variable by 1
//if it will reach to 60 (1 minute) add 1 to minute container
//it should pause after clicking stop button
function countTime() {
 let seconds = (minutes = hours = 0);
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
}
function startStopWatch() {
  setInterval(countTime, 1000);
}
startButton.addEventListener('click', startStopWatch);
