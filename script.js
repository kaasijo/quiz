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
            { text: "B. dinsdag", correct: true },
            { text: "C. woensdag", correct: false },
            { text: "E. donderdag", correct: false },
            { text: "F. vrijdag", correct: false},
            { text: "G. zaterdag", correct: false }
        ] 
    },
    {
        question: "op welk plein in new york laten ze om 12 uur met oud en nieuw een bal vallen?",
        answers: [
            { text: "A. 5th avenue", correct: false },
            { text: "B. central park", correct: false },
            { text: "C. bij de kerk", correct: false },
            { text: "D. times square", correct: true }
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
            { text: "A. calvé pindakaas", correct: true },
            { text: "B. albert heijn pindakaas", correct: false },
            { text: "C. gwoon hagelsag", correct: false },
            { text: "D. jumbo hagelslag", correct: false }
        ]
    },
    {
        question: "Maak de volgende zin in één keer af: Ork, ork, ork, soep eet je met een?’",
        answers: [
            { text: "A. vork", correct: false },
            { text: "B. lepel", correct: true },
            { text: "C. vorken", correct: false },
            { text: "E. lepels", correct: false }
        ]
    },
    {
        question: "Hoeveel haren heeft een mens gemiddeld op zijn of haar hoofd zitten?’",
        answers: [
            { text: "A. 10.000 – 15.000", correct: false },
            { text: "B. 100.000 – 150.000", correct: true },
            { text: "C. 1.000.000 – 1.500.000", correct: false },
        ]
    },
    {
        question: "hoe noem je iemand die in india woont?’",
        answers: [
            { text: "A. indiër", correct: true },
            { text: "B. indiaan", correct: false },
            { text: "C. indiaanse", correct: false },
        ]
    },
    {
        question: "laten vrouwen evenveel scheten als mannen?’",
        answers: [
            { text: "A. ja", correct: false },
            { text: "B. nee, mannen laten er meer", correct: true },
            { text: "C. nee vrouwen laten er meer", correct: false },
        ]
    },
    {
        question: "zing mee met dit liedje voor extra punten?’",
        answers: [
            { text: "extra punten", correct: true },
            { text: "geen punten", correct: false },
        ]
    },
    {
        question: "welk dier steekt en maakt honing?’",
        answers: [
            { text: "A. honingbij", correct: true },
            { text: "B. wesp", correct: false },
            { text: "C. bij", correct: false },
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
    const currentQuestion = questions[currentQuestionIndex]; //IS DUS 0 BIJ 1E START WANT currentQuistionINDEX IS HIERBOVEN OP 0 GEZET. currentQuestion IS DUS DE HUIDIGE VRAAG
    questionElement.innerText = currentQuestion.question; //HIER WORDT DE TEXT VERANDERD VAN questionElement-id (DUS OP DE WEBSITE/INDEX.HTML)
    currentQuestion.answers.forEach(answer => { //"LOOP" DOOR ALLE ANTWOORDEN HEEN VAN DE HUIDIGE VRAAG
        const button = document.createElement('button'); //MAAK EEN BUTTON AAN MET DE NAAM ´button'.
        button.innerText = answer.text; //VERANDER DE TEKST IN DE BUTTON MET DE TEKST VAN HET ANTWOORD VAN DE HUIDIGE VRAAG
        button.classList.add('btn'); //VOEG DE BUTTON TOE AAN CLASS ´btn' CLASS IS STIJL VAN DE BUTTON, ZIE styles.css
        if (answer.correct) { //ALS HET ANTWOORD GOED IS DOE DIT:
            button.dataset.correct = answer.correct; //HET JUISTE ANTWOORD AAN DE DATASET TOEVOEGEN (IN DE HTML STAAT WELKE GOED IS)
        }
        button.addEventListener('click', selectAnswer); //ALS ER OP DE KNOP GEDRUKT (click) WORDT DAN VOER FUNCTIE selectAnswer UIT
        answerButtonsElement.appendChild(button); // VOEG DE KNOP TOE AAN answerButtonsElement. DAT IS EEN PLEK WAAR DE KNOPPEN KOMEN (ZIE OOK DE HTML FILE)
    });
}

function resetState() {
    nextButton.classList.add('hide'); //VERBERG DE NEXT BUTTON
    while (answerButtonsElement.firstChild) { //ZOLANG ER ANTWOORD-KNOPPEN ZIJN 
        answerButtonsElement.removeChild(answerButtonsElement.firstChild); //VERWIJDER ALLE KNOPPEN
    }
    answersSelected = 0; //ZET VARIABELE OP 0. DUS GEEN ANTWOORDEN GESELECTEERD MEER. 
}

function selectAnswer(e) { //FUNCTIE WELKE GEBEURT ALS ER OP ANTWOORDKNOP GEDRUKT WORDT.
    const selectedButton = e.target; //e.target LEEST UIT WELKE KNOP ER GEKRUKT IS 
    const correct = selectedButton.dataset.correct === 'true'; //VERGELIJKT DE DATA-WAARDE VAN HET ANTWOORD 
                                                               // MET DE TEKST "TRUE", ALS DEZE GELIJK IS DAN 
                                                               // KRIJGT DE VARIABELE CORRECT OOK DE WAARDE TRUE, 
                                                               // ANDERS FALSE
    if (correct) { //ALS DE VARIABELE correct TRUE IS:
        correctSound.play(); //SPEEL GELUID AF
        if (currentTeam === 1) { //ALS HET HUIDIGE TEAM 1 IS DAN:
            team1Score++; //TEL 1 PUNT OP BIJ TEAM 1
        } else if (currentTeam === 2) { //ALS HET HUIDIGE TEAM 2 IS DAN:
            team2Score++; //TEL 1 PUNT OP BIJ TEAM 2
        } else { //ALS HET HUIDIGE TEAM 3 IS DAN:
            team3Score++; //TEL 1 PUNT OP BIJ TEAM 3
        }
    } else { //ALS DE VARIABELE correct FALSE IS:
        wrongSound.play();//SPEEL GELUID AF
    }
    selectedButton.classList.add('selected'); //VOEG CLASS TOE AAN DE GESLECTEERDE KNOP
    answersSelected++; //TEL 1 OP BIJ answersSelected
    if (answersSelected === 3) { //ALS ER 3 ANTWOORDEN GESELECTEERD ZIJN DAN:
        Array.from(answerButtonsElement.children).forEach(button => { //maak een array van de kinderen van answerButtonsElement
            setStatusClass(button, button.dataset.correct); //ROEP FUNCTIE setStatusClass AAN MET DE KNOP EN OF HET ANTWOORD GOED IS
        });
        nextButton.classList.remove('hide'); //LAAT DE NEXT BUTTON ZIEN
    }
    currentTeam = currentTeam === 1 ? 2 : currentTeam === 2 ? 3 : 1; //ALS HET HUIDIGE TEAM 1 IS DAN WORDT HET 2, ANDERS 3, ANDERS 1
                                                                     // https://www.geeksforgeeks.org/javascript-ternary-operator/
    updateCurrentTeam(); //ROEP FUNCTIE updateCurrentTeam AAN
}

function setStatusClass(element, correct) { //FUNCTIE WELKE DE STATUS VAN DE KNOP VERANDERD
    clearStatusClass(element); //ROEP FUNCTIE clearStatusClass AAN
    if (correct) { //ALS HET ANTWOORD GOED IS DAN:
        element.classList.add('correct'); //VOEG CLASS 'correct' TOE
    } else {
        element.classList.add('wrong'); //ANDERS VOEG CLASS 'wrong' TOE
    }
}

function clearStatusClass(element) { //FUNCTIE WELKE DE STATUS VAN DE KNOP VERWIJDERD
    element.classList.remove('correct'); //VERWIJDER DE CLASS 'correct'
    element.classList.remove('wrong'); //VERWIJDER DE CLASS 'wrong'
    element.classList.remove('selected'); //VERWIJDER DE CLASS 'selected'
}

function updateCurrentTeam() { //FUNCTIE WELKE HET HUIDIGE TEAM VERANDERD
    const teamName = currentTeam === 1 ? team1Input.value || 'Team 1' : currentTeam === 2 ? team2Input.value || 'Team 2' : team3Input.value || 'Team 3'; 
    //ALS HET HUIDIGE TEAM 1 IS DAN WORDT DE NAAM VAN TEAM 1 GEPAKT ANDERS TEAM 2, ANDERS TEAM 3
    // ( || BETEKEND ¨OR" DUS BIJ GEEN TEAMNAAM WORDT DIE STRING INGEVULD )
    currentTeamElement.innerText = `Huidig team: ${teamName}`; //VERANDER DE TEKST VAN currentTeamElement MET DE NAAM VAN HET HUIDIGE TEAM
}

function showEndScreen() {
    questionElement.innerText = 'Quiz afgelopen!'; //VERANDER DE TEKST VAN questionElement
    answerButtonsElement.innerHTML = ''; //MAAK ALLE KNOPPEN LEEG
    nextButton.textContent = 'Opnieuw'; // Verander de tekst van de knop
    nextButton.classList.remove('hide'); //LAAT DE KNOP ZIEN
    scoreElement.innerText = `${team1Input.value || 'Team 1'}: ${team1Score} - ${team2Input.value || 'Team 2'}: ${team2Score} - ${team3Input.value || 'Team 3'}: ${team3Score}`; 
    //VERANDER DE TEKST VAN scoreElement MET DE SCORES VAN DE TEAMS
    const endMessage = document.createElement('p'); //MAAK EEN NIEUW ELEMENT (PARAGRAAF IN DIT GEVAL) AAN
    endMessage.innerText = 'Bedankt voor het spelen!'; //VERANDER DE TEKST VAN HET NIEUWE ELEMENT
    document.getElementById('quiz-container').appendChild(endMessage); //VOEG HET NIEUWE ELEMENT TOE AAN DE QUIZ-CONTAINER
    quizContainer.classList.add('hide'); //VERBERG DE QUIZ-CONTAINER
    fireworksVideo.classList.remove('hide'); 
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++; //TEL 1 OP BIJ DE HUIDIGE VRAAG
    showQuestion(); //ROEP FUNCTIE showQuestion AAN
});

startQuiz(); //ROEP FUNCTIE startQuiz AAN