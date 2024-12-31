/* DE VRAGEN  */
const questions = [
    {
        question: "catogorie 1. oefenvragen",
        answers: [
            { text: "begin", correct: false },
        ]
    },
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
        question: "catogorie 2. vragen over nieuwjaar.",
        answers: [
            { text: "ga door", correct: false },
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
            { text: "A. happy new year", correct: true },
            { text: "B. we wish you an merry christmas", correct: false },
            { text: "C. psv clublied", correct: false },
            { text: "D. wilhelmus", correct: false }
        ]
    },
    {
        question: "Wat drinken mensen om 12 uur’s nachts met Oudjaar vaak?",
        answers: [
            { text: "A. water", correct: false },
            { text: "B. bier", correct: false },
            { text: "C. champagne", correct: true },
            { text: "D. limoncello", correct: false }
        ]
    },
    {
        question: "op welk plein in new york laten ze om 12 uur met oud en nieuw een bal vallen?",
        answers: [
            { text: "A. 5th avenue", correct: false },
            { text: "B central park", correct: false },
            { text: "C bij de kerk", correct: false },
            { text: "D times square", correct: true }
        ]
    },
    {
        question: "welke dag valt 31 dec in 2024?",
        answers: [
            { text: "A. maandag", correct: false },
            { text: "dinsdag", correct: true },
            { text: "woensdag", correct: false },
            { text: "donderdag", correct: false },
            { text: "vrijdag", correct: false},
            { text: "zaterdag", correct: false }
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
        question: "catogorie 3. algemene kennis vragen.",
        answers: [
            { text: "ga door", correct: false },
        ]
    },
    {
        question: "Welk product werd gepromoot met de zin: ‘Stom hè, ik vind het gewoon lekker.’",
        answers: [
            { text: "calvé pindakaas", correct: true },
            { text: "albert heijn pindakaas", correct: false },
            { text: "gwoon hagelsag", correct: false },
            { text: "jumbo hagelslag", correct: false }
        ]
    },
    {
        question: "Maak de volgende zin in één keer af: Ork, ork, ork, soep eet je met een?’",
        answers: [
            { text: "vork", correct: false },
            { text: "lepel", correct: true },
            { text: "vorken", correct: false },
            { text: "lepels", correct: false }
        ]
    },
    {
        question: "Hoeveel haren heeft een mens gemiddeld op zijn of haar hoofd zitten?’",
        answers: [
            { text: "10.000 – 15.000", correct: false },
            { text: "100.000 – 150.000", correct: true },
            { text: "1.000.000 – 1.500.000", correct: false },
        ]
    },

];
/* HIER WORDEN DE VARIABELEN AANGEMAAKT OM VERDER TE GEBRUIKEN, getElementById BETEKENT PAK
HET ELEMENT VAN DE WEBSITE MET DIE ID-NAAM */
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

/* HIER WORDEN DE VARABELEN OP EEN START-GETAL GEZET. DUS WELKE WAARDE DE VARIABELE MOET
HEBBEN BIJ START PROGRAMMA */
let currentQuestionIndex = 0;
let team1Score = 0;
let team2Score = 0;
let team3Score = 0;
let currentTeam = 1;
let answersSelected = 0;

/* DIT IS DE 1E FUNCTIE GENAAMT startquiz. */
function startQuiz() {
    currentQuestionIndex = 0; //DE VARIABELEN WORDEN HIER ALLEMAAL OP STARTGETAL GEZET.
    team1Score = 0;
    team2Score = 0;
    team3Score = 0;
    currentTeam = 1;
    answersSelected = 0;
    nextButton.classList.add('hide'); //BETEKEND DAT DEZE BUTTON ONZICHTBAAR IS BIJ START
    showQuestion(); //HIER WORDT DE FUNCTIE showQuestion OPGESTART / AANGEROEPEN.
    updateCurrentTeam(); //HIER WORDT DE FUNCTIE updateCurrentTeam AANGEROEPEN.
}

/* DIT IS DE FUNCTIE showQuestion. (DIE WORDT DUS HIERBOVEN AANGEROEPEN DOOR DE ANDERE FUNCTIE) */
function showQuestion() {
    resetState(); //HIER WORDT FUNCTIE resetState AANGEROEPEN. KIJK BIJ DIE FUNCTIE WAT HIJ DOET.
    if (currentQuestionIndex >= questions.length) { //ZOLANG AANTAL VRAGEN NIET OP ZIJN GA DOOR ANDERS START FUNCTIE showEndScreen
        showEndScreen(); //FUNCTIE, KIJK BIJ DIE FUNCTIE WAT HIJ DOET.
        return; //BETEKEND GA TERUG NAAR DE FUNCTIE DIE DEZE FUNCTIE showQuestion HEEFT AANGEROEPEN.
    }
    const currentQuestion = questions[currentQuestionIndex]; //IS DUS 0 BIJ 1E START WANT currentQuistionINDEX IS HIERBOVEN OP 0 GEZET.
    questionElement.innerText = currentQuestion.question; //HIER WORDT DE TEXT VERANDERD VAN questionElement-id (DUS OP DE WEBSITE/INDEX.HTML)
    currentQuestion.answers.forEach(answer => { //"LOOP" DOOR ALLE ANTWOORDEN HEEN VAN DE HUIDIGE VRAAG
        const button = document.createElement('button'); //MAAK EEN BUTTON AAN MET DE NAAM ´button'.
        button.innerText = answer.text; //VERANDER DE TEKST IN DE BUTTON MET DE TEKST VAN HET ANTWOORD VAN DE HUIDIGE VRAAG
        button.classList.add('btn'); //VOEG DE BUTTON TOE AAN CLASS ´btn' CLASS IS STIJL VAN DE BUTTON, ZIE styles.css
        if (answer.correct) { //ALS HET ANTWOORD GOED IS DOE DIT:
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
    questionElement.innerText = 'Quiz afgelopen!';
    answerButtonsElement.innerHTML = '';
    nextButton.textContent = 'Opnieuw'; // Verander de tekst van de knop
    nextButton.classList.remove('hide');
    scoreElement.innerText = `${team1Input.value || 'Team 1'}: ${team1Score} - ${team2Input.value || 'Team 2'}: ${team2Score} - ${team3Input.value || 'Team 3'}: ${team3Score}`;
    const endMessage = document.createElement('p');
    endMessage.innerText = 'Bedankt voor het spelen!';
    document.getElementById('quiz-container').appendChild(endMessage);
    quizContainer.classList.add('hide');
    fireworksVideo.classList.remove('hide');
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    showQuestion();
});

startQuiz();