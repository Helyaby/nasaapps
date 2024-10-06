
// Variáveis de controle
let currentQuestion = 0;

// Array de perguntas e respostas corretas (true para 'Sim', false para 'Não')
const questions = [
    {
        text: "1. As mudanças climáticas são causadas apenas por fenômenos naturais?",
        correctAnswer: false,
        image: "q1.png"
    },
    {
        text: "2. A emissão de gases poluentes contribui para o efeito estufa?",
        correctAnswer: true,
        image: "q2.png"
    },
    {
        text: "3. O ODS 13 foca apenas em proteger as florestas?",
        correctAnswer: false,
        image: "q3.png"
    }
];

// Função para checar a resposta
function checkAnswer(answer) {
    const feedbackMessage = document.getElementById('feedback-message');

    // Se a resposta estiver correta
    if (answer === questions[currentQuestion].correctAnswer) {
        feedbackMessage.textContent = '';
        nextQuestion();
    } else {
        // Se a resposta estiver incorreta
        feedbackMessage.textContent = 'Não é bem isso, tente novamente!';
    }
}

// Função para passar para a próxima pergunta
function nextQuestion() {
    currentQuestion++;

    // Verifica se ainda há perguntas
    if (currentQuestion < questions.length) {
        // Atualiza a imagem e o texto da pergunta
        document.getElementById('question-text').textContent = questions[currentQuestion].text;
        document.getElementById('question-img').src = questions[currentQuestion].image;
    } else {
        // Finaliza o quiz e mostra a mensagem final
        document.querySelector('.quiz-container').classList.add('hidden');
        document.getElementById('final-message').classList.remove('hidden');
    }
}
