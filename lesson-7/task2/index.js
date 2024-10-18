'use strict';

let stopwatchTime = 0;
let stopwatchInterval;
let timerTime = 0;
let timerInterval;

const stopwatchDisplay = document.getElementById('stopwatchDisplay');
const startStopwatch = document.getElementById('startStopwatch');
const stopStopwatch = document.getElementById('stopStopwatch');
const resetStopwatch = document.getElementById('resetStopwatch');
const setTimer = document.getElementById('setTimer');
const timerDisplay = document.getElementById('timerDisplay');
const startTimer = document.getElementById('startTimer');
const stopTimer = document.getElementById('stopTimer');
const resetTimer = document.getElementById('resetTimer');

function updateStopwatch() {
    const hours = String(Math.floor(stopwatchTime / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((stopwatchTime % 3600) / 60)).padStart(2, '0');
    const seconds = String(stopwatchTime % 60).padStart(2, '0');

    stopwatchDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

function updateTimer() {
    const hours = String(Math.floor(timerTime / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((timerTime % 3600) / 60)).padStart(2, '0');
    const seconds = String(timerTime % 60).padStart(2, '0');

    timerDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

//Stopwatch control
startStopwatch.addEventListener('click', () => {
    if (!stopwatchInterval) {
        stopwatchInterval = setInterval(() => {
            stopwatchTime++;
            updateStopwatch();
        }, 1000);
    }
});

stopStopwatch.addEventListener('click', () => {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
});

resetStopwatch.addEventListener('click', () => {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
    stopwatchTime = 0;
    updateStopwatch();
});

//Timer control
setTimer.addEventListener('click', () => {
    timerTime = parseInt(timerInput.value);

    if (timerTime > 0) {
        updateTimer();
    }
});

startTimer.addEventListener('click', () => {
    if (!timerInterval) {
        timerInterval = setInterval(() => {
            if (timerTime > 0) {
                timerTime--;
                updateTimer();
            } else {
                clearInterval(timerInterval);
                timerInterval = null;
            }
        }, 1000);
    }
});

stopTimer.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
});

resetTimer.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
    timerTime = 0;
    updateTimer();
});