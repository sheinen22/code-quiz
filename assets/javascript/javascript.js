var qAndAs = [
    {
        question: "What does HTML stand for?",
        optionA: "A: Hyper Text Markup Language",
        optionB: "B: Hyper Text Multiple Language",
        optionC: "C: Hyper Tools Multi Language",
        optionD: "D: Hyper Trigger Mini Language",
        Correct: "A: Hyper Text Markup Language"
    }, {
        question: "What does CSS stand for?",
        optionA: "A: Colorful Style Sheet",
        optionB: "B: Centralized Style Sheet",
        optionC: "C: Coordinated Style Sheet",
        optionD: "D: Cascading Style Sheet",
        Correct: "D: Cascading Style Sheet"
    }, {
        question: "What character represents 'class' in CSS?",
        optionA: "A: #",
        optionB: "B: :",
        optionC: "C: .",
        optionD: "D: -",
        correct: "C: ."
    }, {
        question: "What flag adds a message in Git?",
        optionA: "A: /m",
        optionB: "B: [m",
        optionC: "C: -m",
        optionD: "D: .m",
        correct: "C: -m"
    }, {
        question: "In CSS, what character allows you to influence all aspects?",
        optionA: "A: .",
        optionB: "B: *",
        optionC: "C: #",
        optionD: "D: @",
        correct: "B: *"
    }
];
var timer = document.querySelector(".timer");
var timeLeft = 99;
var buttonHelp = document.querySelector("#button-help")

var startBtn = document.querySelector(".start-btn")
startBtn.addEventListener("click", startQuiz);


function startQuiz () {
    var rules = document.querySelector(".rules");
    var quizBox = document.querySelector(".quiz-box");
    rules.style.display = "none"
    quizBox.style.display = "block";
    firstQuestion();
    startTime()
}

function startTime() {
    setInterval(function() {
        timeLeft--;
        timer.textContent = timeLeft;
    }, 1000);
}

//need a time decrease function for wrong answer

function firstQuestion () {
    var blankSpace = qAndAs[0];
    var question = document.querySelector(".question");
    var A = document.querySelector(".A");
    var B = document.querySelector(".B");
    var C = document.querySelector(".C");
    var D = document.querySelector(".D");
    question.innerHTML = blankSpace.question;
    A.innerHTML = blankSpace.optionA;
    B.innerHTML = blankSpace.optionB;
    C.innerHTML = blankSpace.optionC;
    D.innerHTML = blankSpace.optionD;
    buttonHelp.addEventListener("click", questionTwo)
}

function questionTwo(event) {
        var target = event.target;
        if (target.matches("#answer")){
            if (qAndAs[0].correct === event.target.textContent) {
                secondQuestion()
                buttonHelp.removeEventListener("click", questionTwo)
            } else {
                secondQuestion()
                buttonHelp.removeEventListener("click", questionTwo)
                //time decrease.
            }
        }}

function secondQuestion () {
    var blankSpace = qAndAs[1];
    var question = document.querySelector(".question");
    var A = document.querySelector(".A");
    var B = document.querySelector(".B");
    var C = document.querySelector(".C");
    var D = document.querySelector(".D");
    question.innerHTML = blankSpace.question;
    A.innerHTML = blankSpace.optionA;
    B.innerHTML = blankSpace.optionB;
    C.innerHTML = blankSpace.optionC;
    D.innerHTML = blankSpace.optionD;
    buttonHelp.addEventListener("click", questionThree)
}

function questionThree(event) {
    var target = event.target;
    if (target.matches("#answer")){
        if (qAndAs[1].correct === event.target.textContent) {
            thirdQuestion()
            buttonHelp.removeEventListener("click", questionThree)
        } else {
            thirdQuestion()
            buttonHelp.removeEventListener("click", questionThree)
            //time decrease.
        }
    }}

function thirdQuestion () {
    var blankSpace = qAndAs[2];
    var question = document.querySelector(".question");
    var A = document.querySelector(".A");
    var B = document.querySelector(".B");
    var C = document.querySelector(".C");
    var D = document.querySelector(".D");
    question.innerHTML = blankSpace.question;
    A.innerHTML = blankSpace.optionA;
    B.innerHTML = blankSpace.optionB;
    C.innerHTML = blankSpace.optionC;
    D.innerHTML = blankSpace.optionD;
    buttonHelp.addEventListener("click", questionFour)
}

function questionFour(event) {
    var target = event.target;
    if (target.matches("#answer")){
        if (qAndAs[2].correct === event.target.textContent) {
            fourthQuestion()
            buttonHelp.removeEventListener("click", questionFour)
        } else {
            fourthQuestion()
            buttonHelp.removeEventListener("click", questionFour)
            //time decrease.
        }
    }}

function fourthQuestion () {
    var blankSpace = qAndAs[3];
    var question = document.querySelector(".question");
    var A = document.querySelector(".A");
    var B = document.querySelector(".B");
    var C = document.querySelector(".C");
    var D = document.querySelector(".D");
    question.innerHTML = blankSpace.question;
    A.innerHTML = blankSpace.optionA;
    B.innerHTML = blankSpace.optionB;
    C.innerHTML = blankSpace.optionC;
    D.innerHTML = blankSpace.optionD;
    buttonHelp.addEventListener("click", questionFive)
}

function questionFive(event) {
    var target = event.target;
    if (target.matches("#answer")){
        if (qAndAs[3].correct === event.target.textContent) {
            fifthQuestion()
            buttonHelp.removeEventListener("click", questionFive)
        } else {
            fifthQuestion()
            buttonHelp.removeEventListener("click", questionFive)
            //time decrease.
        }
    }}

function fifthQuestion () {
    var blankSpace = qAndAs[4];
    var question = document.querySelector(".question");
    var A = document.querySelector(".A");
    var B = document.querySelector(".B");
    var C = document.querySelector(".C");
    var D = document.querySelector(".D");
    question.innerHTML = blankSpace.question;
    A.innerHTML = blankSpace.optionA;
    B.innerHTML = blankSpace.optionB;
    C.innerHTML = blankSpace.optionC;
    D.innerHTML = blankSpace.optionD;
    buttonHelp.addEventListener("click", scorePage)
}

function scorePage(event) {
    var target = event.target;
    if (target.matches("#answer")){
        if (qAndAs[4].correct === event.target.textContent) {
            finalScore()
            buttonHelp.removeEventListener("click", scorePage)
        } else {
            finalScore()
            buttonHelp.removeEventListener("click", scorePage)
            //time decrease.
        }
    }}

function finalScore() {
    
}