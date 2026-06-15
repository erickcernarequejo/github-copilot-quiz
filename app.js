import questions from './questions.js';

// DOM Elements
const startScreen = document.getElementById('start-screen');
const questionScreen = document.getElementById('question-screen');
const resultScreen = document.getElementById('result-screen');

const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const finishBtn = document.getElementById('finish-btn');
const restartBtn = document.getElementById('restart-btn');

const questionCounterText = document.getElementById('question-counter');
const questionNav = document.getElementById('question-nav');
const questionText = document.getElementById('question-text');
const questionInstruction = document.getElementById('question-instruction');
const optionsContainer = document.getElementById('options-container');
const progressBar = document.getElementById('progress');

const feedbackContainer = document.getElementById('feedback-container');
const feedbackText = document.getElementById('feedback-text');
const explanationText = document.getElementById('explanation-text');

const scoreText = document.getElementById('score-text');
const scorePercentage = document.getElementById('score-percentage');
const resultMessage = document.getElementById('result-message');

// State
let currentQuestionIndex = 0;
let userAnswers = new Array(questions.length).fill(null);

// Initialization
function init() {
    startBtn.addEventListener('click', startQuiz);
    nextBtn.addEventListener('click', handleNextQuestion);
    prevBtn.addEventListener('click', handlePrevQuestion);
    finishBtn.addEventListener('click', showResults);
    restartBtn.addEventListener('click', resetQuiz);
}

function startQuiz() {
    startScreen.classList.remove('active');
    questionScreen.classList.add('active');
    
    // Initialize array for multiple choice if not done yet
    questions.forEach((q, idx) => {
        if (Array.isArray(q.answer) && userAnswers[idx] === null) {
            userAnswers[idx] = [];
        }
    });

    renderQuestionNav();
    loadQuestion();
    
    // Make finish button visible when quiz starts
    finishBtn.classList.remove('hidden');
}

function renderQuestionNav() {
    questionNav.innerHTML = '';
    questions.forEach((_, index) => {
        const circle = document.createElement('div');
        circle.classList.add('nav-circle');
        circle.innerText = index + 1;
        circle.addEventListener('click', () => {
            currentQuestionIndex = index;
            loadQuestion();
        });
        questionNav.appendChild(circle);
    });
}

function hasAnsweredQuestion(index) {
    const answer = userAnswers[index];
    if (Array.isArray(questions[index].answer)) {
        return answer && answer.length === questions[index].answer.length;
    }
    return answer !== null;
}

function isCorrectAnswer(index) {
    const q = questions[index];
    const userAns = userAnswers[index];
    
    if (Array.isArray(q.answer)) {
        if (!userAns || userAns.length !== q.answer.length) return false;
        const sortedUser = [...userAns].sort();
        const sortedCorrect = [...q.answer].sort();
        return sortedUser.every((val, i) => val === sortedCorrect[i]);
    }
    
    return userAns === q.answer;
}

function updateQuestionNav() {
    const circles = questionNav.querySelectorAll('.nav-circle');
    circles.forEach((circle, index) => {
        circle.className = 'nav-circle'; // Reset
        if (index === currentQuestionIndex) {
            circle.classList.add('current');
        }
        
        if (hasAnsweredQuestion(index)) {
            circle.classList.add('answered');
            if (!isCorrectAnswer(index)) {
                 circle.classList.add('incorrect');
            }
        }
    });
}

function loadQuestion() {
    const q = questions[currentQuestionIndex];
    const isMultiple = Array.isArray(q.answer);
    
    // Update Header
    questionCounterText.innerText = `Pregunta ${currentQuestionIndex + 1} de ${questions.length}`;
    
    // Calculate progress based on answered questions
    const answeredCount = userAnswers.filter((ans, idx) => hasAnsweredQuestion(idx)).length;
    const progressPercent = (answeredCount / questions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;

    updateQuestionNav();

    // Load Text
    questionText.innerText = q.question;
    
    // Update Instruction
    if (isMultiple) {
        questionInstruction.innerText = `ℹ️ Selecciona ${q.answer.length} opciones`;
        questionInstruction.style.display = 'inline-block';
    } else {
        questionInstruction.style.display = 'none';
    }
    
    // Clear previous options
    optionsContainer.innerHTML = '';
    feedbackContainer.classList.add('hidden');
    feedbackContainer.className = 'feedback hidden'; // Reset classes

    // Setup navigation buttons
    prevBtn.classList.toggle('hidden', currentQuestionIndex === 0);
    nextBtn.classList.toggle('hidden', currentQuestionIndex === questions.length - 1);

    const hasAnsweredCurrent = hasAnsweredQuestion(currentQuestionIndex);

    // Create option buttons
    q.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.innerText = option;
        btn.classList.add('option-btn');
        
        if (hasAnsweredCurrent) {
            btn.disabled = true;
            if (isMultiple) {
                if (q.answer.includes(index)) {
                    btn.classList.add('correct');
                } else if (userAnswers[currentQuestionIndex].includes(index)) {
                    btn.classList.add('incorrect');
                }
            } else {
                if (index === q.answer) {
                    btn.classList.add('correct');
                } else if (index === userAnswers[currentQuestionIndex] && !isCorrectAnswer(currentQuestionIndex)) {
                    btn.classList.add('incorrect');
                }
            }
        } else {
            if (isMultiple && userAnswers[currentQuestionIndex] && userAnswers[currentQuestionIndex].includes(index)) {
                btn.classList.add('selected');
            }
            btn.addEventListener('click', () => selectOption(index, btn));
        }

        optionsContainer.appendChild(btn);
    });

    if (hasAnsweredCurrent) {
        showFeedback(isCorrectAnswer(currentQuestionIndex), q.explanation);
    }
}

function selectOption(selectedIndex, selectedBtn) {
    if (hasAnsweredQuestion(currentQuestionIndex)) return;
    
    const q = questions[currentQuestionIndex];
    const isMultiple = Array.isArray(q.answer);

    if (isMultiple) {
        let currentAnswers = userAnswers[currentQuestionIndex] || [];
        
        // Toggle selection
        if (currentAnswers.includes(selectedIndex)) {
            currentAnswers = currentAnswers.filter(idx => idx !== selectedIndex);
            selectedBtn.classList.remove('selected');
        } else {
            if (currentAnswers.length < q.answer.length) {
                currentAnswers.push(selectedIndex);
                selectedBtn.classList.add('selected');
            }
        }
        
        userAnswers[currentQuestionIndex] = currentAnswers;

        // Check if user has selected the required number of answers
        if (currentAnswers.length === q.answer.length) {
            finalizeQuestion();
        }
    } else {
        userAnswers[currentQuestionIndex] = selectedIndex;
        finalizeQuestion();
    }
}

function finalizeQuestion() {
    const q = questions[currentQuestionIndex];
    const isCorrect = isCorrectAnswer(currentQuestionIndex);
    const isMultiple = Array.isArray(q.answer);

    // Disable all buttons and show colors
    const allBtns = optionsContainer.querySelectorAll('.option-btn');
    allBtns.forEach((btn, idx) => {
        btn.disabled = true;
        btn.classList.remove('selected'); // remove temporary selected class
        
        if (isMultiple) {
             if (q.answer.includes(idx)) {
                 btn.classList.add('correct');
             } else if (userAnswers[currentQuestionIndex].includes(idx)) {
                 btn.classList.add('incorrect');
             }
        } else {
            if (idx === q.answer) {
                btn.classList.add('correct');
            } else if (idx === userAnswers[currentQuestionIndex] && !isCorrect) {
                btn.classList.add('incorrect');
            }
        }
    });

    showFeedback(isCorrect, q.explanation);
    updateQuestionNav();
    
    // Update progress bar
    const answeredCount = userAnswers.filter((ans, idx) => hasAnsweredQuestion(idx)).length;
    const progressPercent = (answeredCount / questions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;
}

function showFeedback(isCorrect, explanation) {
    feedbackContainer.classList.remove('hidden');
    if (isCorrect) {
        feedbackContainer.classList.add('correct-feedback');
        feedbackText.innerText = '✅ ¡Correcto!';
        feedbackText.style.color = '#1a7f37';
    } else {
        feedbackContainer.classList.add('incorrect-feedback');
        feedbackText.innerText = '❌ Incorrecto';
        feedbackText.style.color = '#b31d28';
    }
    explanationText.innerText = explanation || '';
}

function handleNextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    }
}

function handlePrevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

function showResults() {
    // Optional: Warn user if there are unanswered questions
    const unansweredCount = userAnswers.filter((ans, idx) => !hasAnsweredQuestion(idx)).length;
    if (unansweredCount > 0) {
        const confirmFinish = confirm(`Aún tienes ${unansweredCount} pregunta(s) sin responder. ¿Estás seguro que deseas finalizar el test?`);
        if (!confirmFinish) {
            return;
        }
    }

    questionScreen.classList.remove('active');
    resultScreen.classList.add('active');
    
    // Hide finish button on results screen
    finishBtn.classList.add('hidden');

    // Calculate score
    const score = userAnswers.reduce((acc, currentVal, index) => {
        if (isCorrectAnswer(index)) {
            return acc + 1;
        }
        return acc;
    }, 0);

    const percentage = Math.round((score / questions.length) * 100);
    scoreText.innerText = `${score}/${questions.length}`;
    scorePercentage.innerText = `${percentage}%`;

    if (percentage >= 80) {
        resultMessage.innerText = '¡Excelente! 🎉 Tienes un buen nivel para la certificación.';
        resultMessage.style.color = 'var(--success-color)';
    } else if (percentage >= 50) {
        resultMessage.innerText = 'Buen trabajo 👍, pero aún hay áreas que repasar.';
        resultMessage.style.color = '#9a6700'; // Warning color
    } else {
        resultMessage.innerText = 'Necesitas estudiar más sobre GitHub Copilot. 📚 ¡Sigue practicando!';
        resultMessage.style.color = 'var(--error-color)';
    }
}

function resetQuiz() {
    currentQuestionIndex = 0;
    userAnswers.fill(null);
    questions.forEach((q, idx) => {
        if (Array.isArray(q.answer)) {
            userAnswers[idx] = [];
        }
    });
    resultScreen.classList.remove('active');
    startScreen.classList.add('active');
    progressBar.style.width = '0%';
}

// Start app
init();