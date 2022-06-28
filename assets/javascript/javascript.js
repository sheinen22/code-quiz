var qAndAs = [
    {
        question: "What does HTML stand for?",
        optionA: "Hyper Text Markup Language",
        optionB: "Hyper Text Multiple Language",
        optionC: "Hyper Tools Multi Language",
        optionD: "Hyper Trigger Mini Language",
        Correct: "What does HTML stand for?"
    }, {
        question: "What does CSS stand for?",
        optionA: "Colorful Style Sheet",
        optionB: "Centralized Style Sheet",
        optionC: "Coordinated Style Sheet",
        optionD: "Cascading Style Sheet",
        Correct: "Cascading Style Sheet"
    }, {
        question: "What character represents 'class' in CSS?",
        optionA: "#",
        optionB: ":",
        optionC: ".",
        optionD: "-",
        correct: "."
    }, {
        question: "What flag adds a message in Git?",
        optionA: "/m",
        optionB: "[m",
        optionC: "-m",
        optionD: ".m",
        correct: "-m"
    }, {
        question: "In CSS, what character allows you to influence all aspects?",
        optionA: ".",
        optionB: "*",
        optionC: "#",
        optionD: "@",
        correct: "*"
    }
];
var startBtn = document.querySelector(".start-btn")
startBtn.addEventListener("click", startQuiz);

function startQuiz () {
    var rules = document.querySelector(".rules");
    var quizBox = document.querySelector(".quiz-box");
    rules.style.display = "none"
    quizBox.style.display = "block";
}