// Define variables for timer and buttons
let seconds = 0;
let minutes = 0;
let hours = 0;
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;
let interval = null;
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');
const timer = document.getElementById('timer');

// Function to start the timer
function startTimer() {
    seconds++;
    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;
        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }

    // Add leading zeros to numbers less than 10
    if (seconds < 10) {
        displaySeconds = '0' + seconds.toString();
    } else {
        displaySeconds = seconds;
    }
    if (minutes < 10) {
        displayMinutes = '0' + minutes.toString();
    } else {
        displayMinutes = minutes;
    }
    if (hours < 10) {
        displayHours = '0' + hours.toString();
    } else {
        displayHours = hours;
    }

    // Display the updated timer
    timer.textContent = displayHours + ':' + displayMinutes + ':' + displaySeconds;
}

// Event listener for the start button
startButton.addEventListener('click', function() {
    clearInterval(interval);
    interval = setInterval(startTimer, 1000);
});

// Event listener for the stop button
stopButton.addEventListener('click', function() {
    clearInterval(interval);
});

// Event listener for the reset button
resetButton.addEventListener('click', function() {
    clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    timer.textContent = '00:00:00';
});
