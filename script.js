const questions = [
    {
        question: "wat eten nederlanders met oud en nieuw?",
        answers: [
            { text: "A. Pannekoeken", correct: false },
            { text: "B. niks", correct: false },
            { text: "C. oliebollen", correct: true },
            { text: "D. poffertjes", correct: false }
        ]
    },
    {
        question: "Wat word er aangestoken met oud en nieuw?",
        answers: [
            { text: "A. Vuurwerk", correct: true },
            { text: "B. hout", correct: false },
            { text: "C. bommen", correct: true },
            { text: "D. de kachel", correct: false }
        ]
    },
    {
        question: "welk lied past goed bij oud en nieuw",
        answers: [
            { text: "happy new year", correct: true },
            { text: "we wish you an merry christmas", correct: false },
            { text: "psv clublied", correct: false },
            { text: "wilhelmus", correct: false }
        ]
    },
    {
        question: "Wat drinken mensen om 12 uur’s nachts met Oudjaar vaak?",
        answers: [
            { text: "water", correct: false },
            { text: "bier", correct: false },
            { text: "champagne", correct: true },
            { text: "limoncello", correct: false }
        ]
    },
    {
        question: "op welk plein in new york laten ze om 12 uur met oud en nieuw een bal vallen?",
        answers: [
            { text: "5th avenue", correct: false },
            { text: "central park", correct: false },
            { text: "bij de kerk", correct: false },
            { text: "times square", correct: true }
        ]
    },
    {
        question: "welke dag valt 31 dec in 2024?",
        answers: [
            { text: "maandag", correct: false },
            { text: "dinsdag", correct: true },
            { text: "woensdag", correct: false },
            { text: "donderdag", correct: false },
            { text: "vrijdag", correct: false},
            { text: "zaterdag", correct: false }
        ] 
    },
];
//hallo ik ben cas en dit is van mij
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const scoreElement = document.getElementById('score');
const team1Input = document.getElementById('team1');
const team2Input = document.getElementById('team2');
const team3Input = document.getElementById('team3');
const currentTeamElement = document.getElementById('current-team');

const correctSound = new Audio('correct.mp3');
const wrongSound = new Audio('wrong.mp3');

let currentQuestionIndex = 0;
let team1Score = 0;
let team2Score = 0;
let team3Score = 0;
let currentTeam = 1;
let answersSelected = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    team1Score = 0;
    team2Score = 0;
    team3Score = 0;
    currentTeam = 1;
    answersSelected = 0;
    nextButton.classList.add('hide');
    showQuestion();
    updateCurrentTeam();
}

function showQuestion() {
    resetState();
    if (currentQuestionIndex >= questions.length) {
        showEndScreen();
        return;
    }
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
    answersSelected = 0;
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';
    if (correct) {
        correctSound.play();
        if (currentTeam === 1) {
            team1Score++;
        } else if (currentTeam === 2) {
            team2Score++;
        } else {
            team3Score++;
        }
    } else {
        wrongSound.play();
    }
    selectedButton.classList.add('selected');
    answersSelected++;
    if (answersSelected === 3) {
        Array.from(answerButtonsElement.children).forEach(button => {
            setStatusClass(button, button.dataset.correct);
        });
        nextButton.classList.remove('hide');
    }
    currentTeam = currentTeam === 1 ? 2 : currentTeam === 2 ? 3 : 1;
    updateCurrentTeam();
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
    element.classList.remove('selected');
}

function updateCurrentTeam() {
    const teamName = currentTeam === 1 ? team1Input.value || 'Team 1' : currentTeam === 2 ? team2Input.value || 'Team 2' : team3Input.value || 'Team 3';
    currentTeamElement.innerText = `Huidig team: ${teamName}`;
}

function showEndScreen() {
    questionElement.innerText = 'Quiz afgelopen!   gemaakt door: Cas en Ties';
    answerButtonsElement.innerHTML = '';
    nextButton.classList.add('hide');
    scoreElement.innerText = `${team1Input.value || 'Team 1'}: ${team1Score} - ${team2Input.value || 'Team 2'}: ${team2Score} - ${team3Input.value || 'Team 3'}: ${team3Score}`;
    const endMessage = document.createElement('p');
    endMessage.innerText = 'Bedankt voor het spelen!';
    document.getElementById('quiz-container').appendChild(endMessage);
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    showQuestion();
});

startQuiz();