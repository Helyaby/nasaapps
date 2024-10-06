// Variáveis de controle
let currentQuestion = 0;
let score = 0;

// Array de perguntas e respostas
const questions = [
    {
        text: "Complete a frase: O ODS 13 visa combater ____.",
        options: [
            "a fome no mundo", // Errada
            "as mudanças climáticas", // Correta
            "o efeito estufa", // Errada
            "a desigualdade social" // Parcialmente correta
        ],
        correctAnswer: 1, // Índice da opção correta
        partialAnswer: 3 // Índice da opção parcialmente correta
    },
    {
        text: "Complete a frase: A principal causa do aquecimento global é ____.",
        options: [
            "a queima de combustíveis fósseis", // Correta
            "a reciclagem de resíduos", // Errada
            "o desmatamento das florestas", // Parcialmente correta
            "a proteção de florestas" // Errada
        ],
        correctAnswer: 0, // Índice da opção correta
        partialAnswer: 2 // Índice da opção parcialmente correta
    },
    {
        text: "O ODS 13 envolve ações para:",
        options: [
            "apenas proteger os oceanos", // Errada
            "diminuir a emissão de gases do efeito estufa", // Correta
            "apenas proteger os animais", // Errada
            "proteger a biodiversidade", // Parcialmente correta
        ],
        correctAnswer: 1, // Índice da opção correta
        partialAnswer: 3 // Índice da opção parcialmente correta
    }
];

// Função para iniciar o quiz
function startQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById('final-message').classList.add('hidden');
    document.querySelector('.quiz-container').classList.remove('hidden');
    showQuestion();
}

// Função para mostrar a pergunta atual
function showQuestion() {
    const question = questions[currentQuestion];
    document.getElementById('question-text').textContent = question.text;

    // Limpar o conteúdo anterior dos botões de resposta
    const answerButtons = document.getElementById('answer-buttons');
    answerButtons.innerHTML = '';

    // Gerar os botões de resposta para a nova pergunta
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.className = 'answer-button';
        button.onclick = () => checkAnswer(index);
        answerButtons.appendChild(button);
    });

    // Limpar a mensagem de feedback anterior
    document.getElementById('feedback-message').textContent = '';
}

// Função para checar a resposta
function checkAnswer(selectedIndex) {
    const question = questions[currentQuestion];
    
    if (selectedIndex === question.correctAnswer) {
        score += 200; // Resposta correta
        document.getElementById('feedback-message').textContent = 'Correto! +200pts';
    } else if (selectedIndex === question.partialAnswer) {
        score += 100; // Resposta parcialmente correta
        document.getElementById('feedback-message').textContent = 'Parcialmente correto! +100pts';
    } else {
        document.getElementById('feedback-message').textContent = 'Resposta incorreta!';
    }

    // Aguarda 1 segundo antes de passar para a próxima pergunta
    setTimeout(nextQuestion, 1000);
}

// Função para checar a resposta
function checkAnswer(selectedIndex) {
    const question = questions[currentQuestion];
    const characterImg = document.getElementById('character-img');

    if (selectedIndex === question.correctAnswer) {
        score += 200; // Resposta correta
        document.getElementById('feedback-message').textContent = 'Correto! +200pts';
        characterImg.src = "correto.png"; // Mudar imagem para correta
    } else if (selectedIndex === question.partialAnswer) {
        score += 100; // Resposta parcialmente correta
        document.getElementById('feedback-message').textContent = 'Parcialmente correto! +100pts';
        characterImg.src = "corretoparcial.png"; // Mudar imagem para parcialmente correta
    } else {
         document.getElementById('feedback-message').textContent = 'Resposta incorreta!';
        characterImg.src = "errado.png"; // Mudar imagem para incorreta
    }

    // Aguarda 2 segundos antes de passar para a próxima pergunta e restaurar a imagem
    setTimeout(() => {
        characterImg.src = "q1.png"; // Voltar para a imagem original
        nextQuestion();
    }, 2000);
}


// Função para passar para a próxima pergunta
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}


// Função para finalizar o quiz
function endQuiz() {
    document.querySelector('.quiz-container').classList.add('hidden');
    
    const finalScore = document.getElementById('final-score');
    finalScore.textContent = `Você fez ${score} pontos!`;

    // Exibir a pontuação de forma simples
    const finalScoreTable = document.getElementById('final-score-table');
    finalScoreTable.textContent = `${score} pontos`;

    // Mostra a mensagem final e a tabela de ranking
    document.getElementById('final-message').classList.remove('hidden');
}

// Adiciona evento de clique para reiniciar o quiz
document.getElementById('restart-button').addEventListener('click', () => {
    location.reload(); // Recarregar a página para reiniciar o quiz
});


// Adiciona evento de clique para reiniciar o quiz
document.getElementById('restart-button').addEventListener('click', startQuiz);


// Inicia o quiz ao carregar a página
startQuiz();