
var timeEl = document.getElementById("timer");
var time = 0;
timeEl.textContent = time;
var answerBtnEls = document.querySelectorAll(".quiz-ans");
var startBtnCardEl = document.getElementById("start-btn-card");
var startBtnEl = document.getElementById("start-btn");
var responseEl = document.querySelector(".response");
var quizQuestion = document.getElementById("quiz-question");
var ans1El = document.getElementById("ans-1");
var ans2El = document.getElementById("ans-2");
var ans3El = document.getElementById("ans-3");
var ans4El = document.getElementById("ans-4");
var q0 = ["Which of the following languages is used to apply functionality to an application?", "JavaScript", "HTML", "CSS", "Bootstrap", 1];
var q1 = ["What can we type to declare a variable in JavaScript?", "div", "for", "var", "int", 3];
var q2 = ["Arrays are denoted in JavaScript by which symbol?", "**", "[]", "\"\"", "{}", 2];
var q3 = ["Classes are denoted in CSS by which symbol?", "*", "#", "`", ".", 4];
var q4 = ["Which of the following is a semantic HTML element?", "<href>", "<html>", "<meta>", "<header>", 4];
var q5 = ["Which of the following can be used to decrement a variable?", "--", "++", "//", "**", 1];
var q6 = ["Which of the following are NOT a primitive data type?", "String", "Boolean", "Array", "Number", 3];
var q7 = ["Which of the following symbols is the modulus?", "*", "%", "#", "@", 2];
var q8 = ["Which of the following is the universal selector in CSS?", "&", "^", "$", "*", 4];
var q9 = ["Which attribute is used to link images to an HTML file?", "src", "class", "id", "link", 1];
var end = []
var questionArray = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, end];
var questionCounter = 0;


//This function will start the quiz timer
var startTimer = function() {
    time = 75;
    timeEl.textContent = time;
    var timerInterval = setInterval(function() {
        time--;
        timeEl.textContent = time;
        if (time <= 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
};

//This function shows the next question and its set of answers
var nextQuestion = function() {
    quizQuestion.textContent = [questionArray[questionCounter][0]];
    ans1El.textContent = questionArray[questionCounter][1];
    ans2El.textContent = questionArray[questionCounter][2];
    ans3El.textContent = questionArray[questionCounter][3];
    ans4El.textContent = questionArray[questionCounter][4];
    console.log("Correct answer for current question: " + questionArray[questionCounter][5]);
    if (questionCounter == 10) { //Hides answer button and response elements
        quizQuestion.textContent = "Your final score is " + time + "! Enter your initials to save your score.";
        time = 1;
        
        for (var i = 0; i < answerBtnEls.length; i++) {
            answerBtnEls[i].setAttribute("style", "display: none;")
        }
        responseEl.setAttribute("style", "display: none;");
        //Shows score and submission
        // var submitCard = document.createElement("section");
        // submitCard.textContent = "Enter your initials: ";
        // var initialsInputEl = document.createElement("input");
        // submitCard.appendChild(initialsInputEl);
        // var submitInitialsBtnEl = document.createElement("button");
        // submitInitialsBtnEl.setAttribute("style", "margin: 10px;");
        // submitInitialsBtnEl.textContent = "Submit";
        // submitCard.appendChild(submitInitialsBtnEl);
        // document.body.children[1].appendChild(submitCard);
        initialsSubmitCardEl.setAttribute("style", "display: visible;");
    }
}

var initialsSubmitCardEl = document.getElementById("initials-form");
initialsSubmitCardEl.setAttribute("style", "display: none;");

//This hides the answer buttons on page load
for (var i = 0; i < answerBtnEls.length; i++) {
    answerBtnEls[i].setAttribute("style", "display: none;")
}

//This hides the response element on page load
responseEl.setAttribute("style", "display: none;");

//Displays incorrect
var showWrong = function() {
    responseEl.setAttribute("style", "display: visible;");
    responseEl.textContent = "Incorrect!"
    let count = 2;
    var responseTimer = setInterval(function() {
        count--;
        
        if (count <= 0) {
            clearInterval(responseTimer);
            responseEl.setAttribute("style", "display: none;");
        }
    }, 1000);
    console.log("Incorrect");
}

//Displays correct
var showRight = function() {
    responseEl.setAttribute("style", "display: visible;");
    responseEl.textContent = "Correct!"
    let count = 2;
    var responseTimer = setInterval(function() {
        count--;
        
        if (count <= 0) {
            clearInterval(responseTimer);
            responseEl.setAttribute("style", "display: none;");
        }
    }, 1000);
    console.log("Correct");
}

//This causes the start button to hide itself, show the first question, and start the timer
startBtnEl.addEventListener('click', function() {
    //This hides the start button
    startBtnCardEl.setAttribute("style", "display: none;")
    //This shows the answer buttons
    for (var i = 0; i < answerBtnEls.length; i++) {
        answerBtnEls[i].setAttribute("style", "display: visible;")
    }
    //This shows the first question and its answers
    nextQuestion();
    
    startTimer();
})

//Determines if the answer is correct by comparing it to the answer in the appropriate array
//Then continues to the next question
//And decreases time if the answer is wrong
ans1El.addEventListener('click', function () {
    console.log("User input: 1");
    if (questionArray[questionCounter][5] == 1) {
        showRight();
        questionCounter++;
        nextQuestion();
    } else {
        showWrong();
        questionCounter++;
        time -= 5;
        nextQuestion();
    }
})

ans2El.addEventListener('click', function () {
    console.log("User input: 2");
    if (questionArray[questionCounter][5] == 2) {
        showRight();
        questionCounter++;
        nextQuestion();
    } else {
        showWrong();
        questionCounter++;
        time -= 5;
        nextQuestion();
    }
})

ans3El.addEventListener('click', function () {
    console.log("User input: 3");
    if (questionArray[questionCounter][5] == 3) {
        showRight();
        questionCounter++;
        nextQuestion();
    } else {
        showWrong();
        questionCounter++;
        time -= 5;
        nextQuestion();
    }
})

ans4El.addEventListener('click', function () {
    console.log("User input: 4");
    if (questionArray[questionCounter][5] == 4) {
        showRight();
        questionCounter++;
        nextQuestion();
    } else {
        showWrong();
        questionCounter++;
        time -= 5;
        nextQuestion();
    }
})

//Saves initials and score to local storage
// submitInitialsBtnEl.addEventListener('click', function() {
//     window.localStorage.setItem(initialsInputEl, time);
//     console.log("hi")
// })
