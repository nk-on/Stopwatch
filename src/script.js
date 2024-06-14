const hoursElement = document.querySelector('[data-hours]');
const minutesElement = document.querySelector('[data-minutes]');
const secondsElement = document.querySelector('[data-seconds]');
const startButton = document.querySelector('[data-start]');
///stopwatch should display time elapsed after clicking start buttton
//run set timeout function
//increase count variable by 1
//if it will reach to 60 (1 minute) add 1 to minute container
//it should pause after clicking stop button
function startStopWatch() {
  let seconds = (minutes = hours = 0);
  setInterval(() => {
    seconds++;
    if (seconds >= 60) {
      minutes++;
      seconds = 0;
    }
    seconds <= 10 ?  secondsElement.textContent = `:0${seconds}` :  secondsElement.textContent = `:${seconds}`;
    minutesElement.textContent = minutes;
  }, 1000);
}
startButton.addEventListener('click', startStopWatch);
