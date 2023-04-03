// Get elements from DOM
const btnStart = document.querySelector('.btn-start');
const btnStop = document.querySelector('.btn-stop');
const btnReset = document.querySelector('.btn-reset');
const timerMin = document.querySelector('.minutes');
const timerSec = document.querySelector('.seconds');

// Declare a "interval" variable to store the current timer
let interval;

// Declare a "timer" function to increase the timer
const timer = () => {
  // Parse string from HTML to number
  let minutes = parseInt(timerMin.textContent, 10);
  let seconds = parseInt(timerSec.textContent, 10);

  // Increase seconds counter
  seconds++;

  // Check if seconds is equal to 59
  if (seconds === 59) {
    seconds = 0;
    minutes++;
  }

  // Check if minutes is equal to 60, if so, stop the timer
  if (minutes === 60) {
    clearInterval(interval);
  }

  // Update HTML elements, if smaller than 10, display as "0x"
  if (seconds < 10) {
    timerSec.textContent = `0${seconds}`;
  } else {
    timerSec.textContent = seconds;
  }

  if (minutes < 10) {
    timerMin.textContent = `0${minutes}`;
  } else {
    timerMin.textContent = minutes;
  }
};

// Start button event handler
btnStart.addEventListener('click', () => {
  // Check if timer is already running
  if (interval) {
    alert('Timer is already running');
  } else {
    interval = setInterval(timer, 1000);
    alert('Timer has started');
  }
});

// Stop button event handler
btnStop.addEventListener('click', () => {
  if (interval) {
    clearInterval(interval);
    interval = null;
    alert('Timer has stopped');
  } else {
    alert('Timer is already stopped');
  }
});

// Reset button event handler
btnReset.addEventListener('click', () => {
  if (interval) {
    timerMin.textContent = '00';
    timerSec.textContent = '00';
    clearInterval(interval);
    alert('Timer has reset');
  } else {
    alert('Timer is already stopped');
  }
});
