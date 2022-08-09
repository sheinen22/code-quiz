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

var startBtn = document.querySelector(".start-btn")
startBtn.addEventListener("click", startQuiz);

function startQuiz () {
    var rules = document.querySelector(".rules");
    var quizBox = document.querySelector(".quiz-box");
    rules.style.display = "none"
    quizBox.style.display = "block";
    firstQuestion ();
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
}

document.addEventListener("click", function (event) {
        var target = event.target;
        if (target.matches("#answer")){
            if (qAndAs[0].correct === event.target.textContent) {
                secondQuestion()
            } else {
                secondQuestion()
                //time decrease.
            }
        }})

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
}

// document.addEventListener("click", function (event) {
//     var target = event.target;
//     if (target.matches("#answer")){
//         if (qAndAs[1].correct === event.target.textContent) {
//             thirdQuestion()
//         } else {
//             thirdQuestion()
//             //time decrease.
//         }
//     }})

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
}

// document.addEventListener("click", function (event) {
//     var target = event.target;
//     if (target.matches(".A", ".B", ".C", ".D" )){
//         if (qAndAs[2].correct === event.target.textContent) {
//             fourthQuestion()
//         } else {
//             fourthQuestion()
//             //time decrease.
//         }
//     }})

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
}

// document.addEventListener("click", function (event) {
//     var target = event.target;
//     if (target.matches(".A", ".B", ".C", ".D" )){
//         if (qAndAs[3].correct === event.target.textContent) {
//             fifthQuestion()
//         } else {
//             fifthQuestion()
//             //time decrease.
//         }
//     }})

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
}

// document.addEventListener("click", function (event) {
//     var target = event.target;
//     if (target.matches(".A", ".B", ".C", ".D" )){
//         if (qAndAs[4].correct === event.target.textContent) {
//             //need a score screen
//         } else {
//             //need a score screen
//             //time decrease
//         }
//     }})
