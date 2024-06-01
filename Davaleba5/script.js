document.getElementById('hideButton').addEventListener('click', function() {
    document.getElementById('randomText').classList.add('hidden');
});


const questions = [
    {
        question: "რომელი იყო პირველი ფერადი საშინელებათა ფილმი?",
        answers: ["Curse of Frankenstein", "ეშმაკის სახლი", "ცვილის მუზეუმის საიდუმლო"],
        correct: 0
    },
    {
        question: "'Pretty Woman' რომელ ქალაქში ვითარდება?",
        answers: ["Chicago", "ლოს ანჯელესი", "კალიფორნიის"],
        correct: 1
    },
    {
        question: "ვინ იმღერა 'My Heart Will Go On' ტიტანიკში?",
        answers: ["Celine Dion", "Mariah Carey", "ვიტნი ჰიუსტონი"],
        correct: 0
    }
];

let score = 0;


function createQuiz() {
    const questionContainer = document.getElementById('questionContainer');
    
    questions.forEach((q, qIndex) => {
        const questionDiv = document.createElement('div');
        const questionText = document.createElement('h4');
        questionText.textContent = q.question;
        questionDiv.appendChild(questionText);

        q.answers.forEach((answer, aIndex) => {
            const answerButton = document.createElement('button');
            answerButton.textContent = answer;
            answerButton.addEventListener('click', function() {
                if (aIndex === q.correct) {
                    answerButton.classList.add('correct');
                    score++;
                } else {
                    answerButton.classList.add('wrong');
                }
                document.getElementById('score').textContent = score;
                disableButtons(questionDiv);
            });
            questionDiv.appendChild(answerButton);
        });

        questionContainer.appendChild(questionDiv);
    });
}


function disableButtons(questionDiv) {
    const buttons = questionDiv.querySelectorAll('button');
    buttons.forEach(button => {
        button.disabled = true;
    });
}


createQuiz();