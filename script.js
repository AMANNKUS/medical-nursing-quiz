let currentQuestion = 0;
let userAnswers = {};

const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question-text");
const optionsBox = document.getElementById("options");

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const submitBtn = document.getElementById("submit-btn");

const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");
const scoreText = document.getElementById("score-text");
const reviewBox = document.getElementById("review-box");

function loadQuestion() {
  if (typeof questions === "undefined" || questions.length === 0) {
    questionText.textContent = "Questions could not be loaded. Please check questions.js.";
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
    submitBtn.style.display = "none";
    return;
  }

  const q = questions[currentQuestion];

  questionNumber.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
  questionText.textContent = q.question;

  optionsBox.innerHTML = "";

  for (let key in q.options) {
    const option = document.createElement("label");
    option.className = "option";

    option.innerHTML = `
      <input type="radio" name="answer" value="${key}" 
      ${userAnswers[currentQuestion] === key ? "checked" : ""}>
      ${key}. ${q.options[key]}
    `;

    optionsBox.appendChild(option);
  }

  document.querySelectorAll("input[name='answer']").forEach(input => {
    input.addEventListener("change", function () {
      userAnswers[currentQuestion] = this.value;
    });
  });

  prevBtn.style.display = currentQuestion === 0 ? "none" : "inline-block";
  nextBtn.style.display = currentQuestion === questions.length - 1 ? "none" : "inline-block";
  submitBtn.style.display = currentQuestion === questions.length - 1 ? "inline-block" : "none";
}

nextBtn.addEventListener("click", function () {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    loadQuestion();
  }
});

prevBtn.addEventListener("click", function () {
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion();
  }
});

submitBtn.addEventListener("click", function () {
  let score = 0;

  questions.forEach((q, index) => {
    if (userAnswers[index] === q.correctAnswer) {
      score++;
    }
  });

  quizBox.classList.add("hidden");
  resultBox.classList.remove("hidden");

  scoreText.textContent = `You scored ${score} out of ${questions.length}`;
});

function reviewAnswers() {
  resultBox.classList.add("hidden");
  reviewBox.classList.remove("hidden");

  reviewBox.innerHTML = "<h2>Answer Review</h2>";

  questions.forEach((q, index) => {
    const userAnswer = userAnswers[index] || "Not answered";
    const correctAnswer = q.correctAnswer;

    const item = document.createElement("div");
    item.className = "review-item";

    item.innerHTML = `
      <h3>Question ${index + 1}</h3>
      <p>${q.question}</p>

      <p><strong>Your Answer:</strong> 
      <span class="${userAnswer === correctAnswer ? "correct" : "wrong"}">${userAnswer}</span></p>

      <p><strong>Correct Answer:</strong> 
      <span class="correct">${correctAnswer}. ${q.options[correctAnswer]}</span></p>

      <p><strong>Rationale for Correct Answer:</strong> ${q.rationaleCorrect}</p>

      <p><strong>Why Other Options Are Incorrect:</strong></p>
      <ul>
        ${Object.keys(q.options).map(key => {
          if (key !== correctAnswer) {
            return `<li><strong>${key}. ${q.options[key]}:</strong> ${q.rationalesIncorrect[key] || "No rationale provided."}</li>`;
          }
          return "";
        }).join("")}
      </ul>
    `;

    reviewBox.appendChild(item);
  });
}

loadQuestion();