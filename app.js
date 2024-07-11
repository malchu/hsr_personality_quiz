import questions from './questions.js';
import characters from './characters.js'

document.addEventListener('DOMContentLoaded', function() 
  {
    const images = [
      "./assets/mini.gif",
      "./assets/mini1.gif",
      "./assets/march7.gif",
      "./assets/ratio.gif",
      "./assets/bailu.gif",
      "./assets/sparkle.gif",
    ];

    let currentImageIndex = 0;
    const slideshowImage = document.getElementById('background');

    function showNextSlide() {
      // Increment currentImageIndex and wrap around
      currentImageIndex++;
      if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
      }

      // Update the src attribute of the image element
      slideshowImage.src = images[currentImageIndex];

      // Change slide every 3 seconds (3000 milliseconds)
      setTimeout(showNextSlide, 3000);
    }

    // Call showNextSlide to start the slideshow
    showNextSlide();
    
    const homeContainer = document.getElementById("home-container");
    const questionContainer = document.getElementById("question-container");
    let index = 0;

    const button = document.getElementById("start-button");
    button.addEventListener("click", function() 
      {
        homeContainer.style.display = "none";
        questionContainer.style.display = "flex";
        loadQuestion(index);
      }
    );
    
    questionContainer.addEventListener("click", (event) => { 
      if (event.target && event.target.id === "next-button") {
        index++;
        loadQuestion(index);
      }
    });

    questionContainer.addEventListener("click", (event) => { 
      if (event.target && event.target.id === "results-button") {
        displayResults();
      }
    });

    questionContainer.addEventListener("click", (event) => {
      if (event.target && event.target.id === "share-button") {
        
      }
    });

    function loadQuestion(index) {
      const numberOfQuestions = 25;
      questionContainer.innerHTML = "";

      if (index < numberOfQuestions) {
        const question = questions[index];
        questionContainer.innerHTML = `
            <div class="title-container">
              <img class="home-mini" src="./assets/mini.gif"/>
              <h1 class="home-title" >Question ${index + 1}</h1>
              <img class="home-mini" src="./assets/mini1.gif"/>
            </div>
            <h4 class="home-title">${question.text}</h4>
            <img class="home-background" src="./assets/march7.gif" />
            <button class="progress-button" id="next-button">Next Question</button>
        `;
      } else {
        questionContainer.innerHTML = `
            <div class="title-container">
              <img class="home-mini" src="./assets/loading.gif"/>
              <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.herokuapp.com?font=Noto+Sans&weight=600&size=32&duration=2000&pause=1000&color=3820A3&center=true&vCenter=true&random=false&width=320&height=40&lines=Calculating+results..." alt="Typing SVG" /></a>
              <img class="home-mini" src="./assets/loading.gif"/>
            </div>
            <h4 class="home-title">"The Simulated Universe never disappointed me. You are what disappoints me..." ~ Herta</h4>
            <img class="home-background" src="./assets/loading.gif" />
            <button class="progress-button" id="results-button">I'm ready!</button>
        `;
      }
    }

    function displayResults() {
      questionContainer.innerHTML = `
          <div class="title-container">
            <img class="home-mini" src="./assets/march7.gif"/>
            <h1 class="home-title" >You are March 7th!</h1>
            <img class="home-mini" src="./assets/march7.gif"/>
          </div>
          <img class="home-background" src="./assets/march7.gif" />
          <button class="progress-button" id="share-button">Share</button>
        `;
    }
  }
);