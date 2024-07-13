import questions from './questions.js';
import characters from './characters.js'

document.addEventListener('DOMContentLoaded', function() 
  {
    const images = [
      "./assets/silverwolf.gif",
      "./assets/stelle.gif",
      "./assets/ratio.gif",
      "./assets/bailu.gif",
      "./assets/firefly.gif",
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
    let selectedChoice = null;
    let questionTrait = null;
    let answers = [];

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
        if (selectedChoice) {
          let questionScore = questionTrait.concat([Number(selectedChoice.id)])
          answers.push(questionScore);
          console.log(questionScore);
          index++;
          loadQuestion(index);
          selectedChoice = null; // Reset the selected choice
        } else {
          alert("Please select a choice before proceeding.");
        }
      }

      if (event.target && event.target.id === "results-button") {
        const report = calculateResults();
        const match = findBestMatch(report);
        displayResults(match);
      }

      if (event.target && event.target.id === "share-button") {
        // Get the modal
        var modal = document.getElementById("myModal");

        modal.style.display = "flex";

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
          modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        }
      }

      if (event.target && event.target.id === "restart-button") {
        homeContainer.style.display = "flex";
        questionContainer.style.display = "none";
        index = 0;
        answers = [];
      }
    });

    function loadQuestion(index) {
      const numberOfQuestions = 5;
      questionContainer.innerHTML = "";

      if (index < numberOfQuestions) {
        const question = questions[index];
        questionContainer.innerHTML = `
            <div class="title-container">
              <img class="home-mini" src="./assets/logo.png" alt="">
              <h1 class="home-title" >Question ${index + 1} of ${numberOfQuestions}</h1>
              <img class="home-mini" src="./assets/logo.png" alt="">
            </div>
            <h4>${question.text}</h4>
            <img class="home-background" src="./assets/march7.gif" alt="">
            <div id="choices-container">
              <h2 class="choice-marker">Disagree</h2>
              <ul id="choices-list">
                <li class="choice-item" id="-2">i</li>
                <li class="choice-item" id="-1">i</li>
                <li class="choice-item" id="0">i</li>
                <li class="choice-item" id="1">i</li>
                <li class="choice-item" id="2">i</li>
              </ul>
              <h2 class="choice-marker">Agree&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>
            </div>
            <h3 class="choice-marker-phone">Disagree&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Agree</h3>
            <div class="button-container">
              <button class="progress-button" id="restart-button">Restart</button>
              <button class="progress-button" id="next-button">Next Question</button>
            </div>
        `;

        const choiceItems = document.querySelectorAll(".choice-item");
        const nextButton = document.getElementById("next-button");

        function selectChoice(item) {
          if (selectedChoice) {
            selectedChoice.classList.remove("selected");
          }
          item.classList.add("selected");
          selectedChoice = item;
          questionTrait = [question.trait, question.reverse];
          nextButton.disabled = false; // Enable the next button when a choice is selected
        }
  
        choiceItems.forEach(item => {
          item.addEventListener("click", function() {
            selectChoice(item);
          });
        });

      } else {
        questionContainer.innerHTML = `
            <div class="title-container">
              <img class="home-mini" src="./assets/loading.gif" alt="">
              <h1 class="home-title" >Calculating...</h1>
              <img class="home-mini" src="./assets/loading.gif" alt="">
            </div>
            <h4 class="home-title">"The Simulated Universe never disappointed me. You are what disappoints me..." ~ Herta</h4>
            <img class="home-background" src="./assets/loading.gif" alt="">
            <button class="progress-button" id="results-button">I'm ready!</button>
        `;
      }
    }

    let myReport = [
      { name: 'energy', score: 0 },
      { name: 'mind', score: 0 },
      { name: 'nature', score: 0 },
      { name: 'tactics', score: 0 },
      { name: 'identity', score: 0 },
    ];

    function calculateResults() {
      answers.forEach((questionScore) => {
        let myScore = questionScore[2] * (Boolean(questionScore[1]) ? -1 : 1);
        let reportItem = myReport.find(item => item.name === questionScore[0]);

        if (reportItem) {
          reportItem.score += myScore;
        }
      });
      
      myReport.forEach(item => {
        item.score /= 5;
      });
      console.log(myReport);
      return myReport;
    }

    function findBestMatch(report) {
      let compatibilityScore = 0;
      let bestMatch = "Guoba";
      let bestScore = Infinity;
      let tiebreakers = [];

      characters.forEach((character) => {
        compatibilityScore = 0;
        character.traits.forEach((trait) => {
          let reportTrait = myReport.find(item => item.name === trait.name);
          compatibilityScore += Math.abs(trait.score - reportTrait.score);
        });

        if (compatibilityScore < bestScore) {
          bestScore = compatibilityScore;
          bestMatch = character.name;
          tiebreakers = [];
          tiebreakers.push(bestMatch);
        } else if (compatibilityScore === bestScore) {
          tiebreakers.push(character.name);
        }
      });

      console.log(tiebreakers);

      // Diversify any tiebreakers
      bestMatch = tiebreakers[Math.floor(Math.random() * tiebreakers.length)];

      console.log(bestScore)
      return bestMatch; 
    }

    function displayResults(match) {
      questionContainer.innerHTML = `
          <div class="title-container">
            <img class="home-mini" src="./assets/logo.png" alt="">
            <h1 class="home-title" >You are ${match}!</h1>
            <img class="home-mini" src="./assets/logo.png" alt="">
          </div>
          <img class="home-background" src="./assets/img/characters/${match}.png" alt="">
          <div class="button-container">
            <button class="progress-button" id="restart-button">Play again!</button>
          </div>
        `;
    }

    const instagram = document.getElementById("instagram");
    instagram.addEventListener("click", () => {
      copyCurrentUrl();
    });

    const threads = document.getElementById("threads");
    threads.addEventListener("click", () => {
      copyCurrentUrl();
    });

    const copy = document.getElementById("copy");
    copy.addEventListener("click", () => {
      copyCurrentUrl();
    });

    function copyCurrentUrl() {
      const url = "Find out which Honkai Star Rail character you are: " + window.location.href;
      navigator.clipboard.writeText(url)
      
      alert('Link copied!');
    }
  }
);