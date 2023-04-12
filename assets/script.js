var timeEl = document.getElementById("timer");
var time = 0;
timeEl.textContent = time;

//This function will start the quiz timer
var startTimer = function() {
    var time = 75;
    timeEl.textContent = time;
    var timerInterval = setInterval(function() {
        time--;
        timeEl.textContent = time;
        if (time <= 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
};

