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
]

questions.forEach(question => {
    question.forEach(answers => {
        if (answers.correct === true)
            console.log(question.text)
    })
    
});