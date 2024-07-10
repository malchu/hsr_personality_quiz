import questions from './questions.js';
import characters from './characters.js'

document.addEventListener('DOMContentLoaded', function() 
  {
    const button = document.getElementById("start-button");
    button.addEventListener("click", function() 
      {
        let homePanel = document.getElementById("home-container");
        let questionPanel = document.getElementById("question-container");
        homePanel.style.display = "none";
        questionPanel.style.display = "flex";
      }
    );

    let questionIndex = 0;

    const nextButton = document.getElementById("next-button");
    nextButton.addEventListener("click", function() 
      {
        nextQuestion(questionIndex);
      }
    );

    function nextQuestion(index) {
      const currentQuestion = questions[questionIndex];
      const questionContainer = document.getElementById("question-container");

      questionContainer.innerHTML = '';

      if (index < questions.length) {

      } else {
        calculateAndDisplayResults(responses);
      }
    }
  }
);