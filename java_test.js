const questions = [
    {
        question: "catogorie 1. oefenvragen",
        answers: [
            { text: "begin", correct: false },
            { text: 'einde', correct: true }
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
]

questions.forEach(question => {

    for (const answer of question.answers) {
        // console.log('test')
        // console.log(answer.text)
        if (answer.correct === true)
            console.log(answer.text)
    }

})