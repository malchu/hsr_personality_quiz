import questions from './questions.js';
import characters from './characters.js'

document.addEventListener('DOMContentLoaded', function() 
  {
    const images = [
      "./assets/gif/qingque.gif",
      "./assets/gif/stelle.gif",
      "./assets/gif/silverwolf.gif",
      "./assets/gif/march7.gif",
      "./assets/gif/bailu.gif",
      "./assets/gif/firefly.gif",
      "./assets/gif/jingliu.gif",
      "./assets/gif/kafka.gif",
      "./assets/gif/jingyuan.gif",
      "./assets/gif/sparkle.gif",
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

      if (event.target && event.target.id === "restart-button") {
        restart();
      }
    });

    function loadQuestion(index) {
      const numberOfQuestions = 0;
      questionContainer.innerHTML = "";

      if (index < numberOfQuestions) {
        const question = questions[index];
        questionContainer.innerHTML = `
            <div class="title-container">
              <img class="home-mini" src="./assets/img/logos/logo.png" alt="">
              <h1 class="home-title" >Question ${index + 1} of ${numberOfQuestions}</h1>
              <img class="home-mini" src="./assets/img/logos/logo.png" alt="">
            </div>
            <h4>${question.text}</h4>
            <img class="home-background" src="./assets/gif/stelle.gif" alt="">
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
              <img class="home-mini" src="./assets/gif/loading.gif" alt="">
              <h1 class="home-title" >Calculating...</h1>
              <img class="home-mini" src="./assets/gif/loading.gif" alt="">
            </div>
            <h4 class="home-title">"The Simulated Universe never disappointed me. You are what disappoints me..." ~ Herta</h4>
            <img class="home-background" src="./assets/gif/loading.gif" alt="">
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

    let characterScores = [];
    let pathScores = [
      {name: "Preservation", score: 0},
      {name: "Nihility", score: 0},
      {name: "Destruction", score: 0},
      {name: "The Hunt", score: 0},
      {name: "Harmony", score: 0},
      {name: "Abundance", score: 0},
      {name: "Erudition", score: 0},
    ];
    let typeScores = [
      {name: "Physical", score: 0},
      {name: "Ice", score: 0},
      {name: "Wind", score: 0},
      {name: "Imaginary", score: 0},
      {name: "Quantum", score: 0},
      {name: "Fire", score: 0},
      {name: "Lightning", score: 0},
    ];
    let compatibilityScoreTotal = 0;

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

        compatibilityScoreTotal += compatibilityScore;
        characterScores.push([character.name, compatibilityScore, character.path, character.type]);

        // calculate path and type rankings
        let path = pathScores.find(item => item.name === character.path);
        path.score += compatibilityScore;
        let type = typeScores.find(item => item.name === character.type);
        type.score += compatibilityScore;

        // check if character is the best match
        if (compatibilityScore < bestScore) {
          bestScore = compatibilityScore;
          bestMatch = character.name;
          tiebreakers = [];
          tiebreakers.push(bestMatch);
        } else if (compatibilityScore === bestScore) {
          tiebreakers.push(character.name);
        }
      });

      // build top 5 tables
      pathScores.sort((a, b) => a.score - b.score);
      typeScores.sort((a, b) => a.score - b.score);

      characterScores.sort((a, b) => {
        // Primary sort by score
        if (a[1] < b[1]) return -1;
        if (a[1] > b[1]) return 1;

        // Secondary sort by path
        if (pathScores.findIndex(item => item.name === a[2]) < pathScores.findIndex(item => item.name === b[2])) return -1;
        if (pathScores.findIndex(item => item.name === a[2]) > pathScores.findIndex(item => item.name === b[2])) return 1;

        // Tertiary sort by type
        if (typeScores.findIndex(item => item.name === a[3]) < typeScores.findIndex(item => item.name === b[3])) return -1;
        if (typeScores.findIndex(item => item.name === a[3]) > typeScores.findIndex(item => item.name === b[3])) return 1;

        // Quaternary sort by character name (alphabetical order)
        if (a[0] < b[0]) return -1;
        if (a[0] > b[0]) return 1;

        // They are equal
        return 0;
      });

      console.log([characterScores[0][0], pathScores[0].name, typeScores[0].name]);
      console.log(pathScores);
      console.log(typeScores);
      console.log(compatibilityScoreTotal);
      console.log(tiebreakers);

      // Diversify any tiebreakers
      bestMatch = characterScores[0][0];

      console.log(bestScore)
      return bestMatch; 
    }

    function displayResults(match) {
      characterScores.forEach(character => {
        character.percentage = ((character[1] / 20) * 100).toFixed(1);
        character.invertedPercentage = (100 - character.percentage).toFixed(1);
      });
      
      pathScores.forEach(path => {
        path.percentage = ((path.score / compatibilityScoreTotal) * 100).toFixed(1);
        path.invertedPercentage = (100 - path.percentage).toFixed(1);
      });

      typeScores.forEach(type => {
        type.percentage = ((type.score / compatibilityScoreTotal) * 100).toFixed(1);
        type.invertedPercentage = (100 - type.percentage).toFixed(1);
      });
      
      let tableHTML = `
          <div class="title-container">
            <img class="home-mini" src="./assets/img/logos/logo.png" alt="">
            <h1 class="home-title" >You are ${match}!</h1>
            <img class="home-mini" src="./assets/img/logos/logo.png" alt="">
          </div>
          <img class="home-background" src="./assets/img/characters/${match}.png" alt="">
          <div class="button-container">
            <button class="progress-button" id="restart-button">Play again!</button>
          </div>
          <div class="stats-container">
            <table class="stats" id="stats">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Character</th>
                  <th>Match</th>
                </tr>
              </thead>
              <tbody>
        `;
      
        characterScores.slice(0, 5).forEach((character, index) => {
          tableHTML += `
            <tr>
              <td>${index + 1}</td>
              <td>${character[0]}</td>
              <td>${character.invertedPercentage}%</td>
            </tr>
          `;
        });

        tableHTML += `
            </tbody>
            <tbody id="more-stats">
        `;

        characterScores.slice(5).forEach((character, index) => {
          tableHTML += `
            <tr>
              <td>${index + 6}</td>
              <td>${character[0]}</td>
              <td>${character.invertedPercentage}%</td>
            </tr>
          `;
        });

        tableHTML += `
            </tbody>
          </table>
          <button id="show-more-button">Show more</button>
          <table class="stats">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Path</th>
                  <th>Match</th>
                </tr>
              </thead>
              <tbody>
        `;

        pathScores.forEach((path, index) => {
          tableHTML += `
            <tr>
              <td>${index + 1}</td>
              <td>${path.name}</td>
              <td>${path.invertedPercentage}%</td>
            </tr>
          `;
        });

        tableHTML += `
            </tbody>
          </table>
          <table class="stats">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Type</th>
                  <th>Match</th>
                </tr>
              </thead>
              <tbody>
        `;

        typeScores.forEach((type, index) => {
          tableHTML += `
            <tr>
              <td>${index + 1}</td>
              <td>${type.name}</td>
              <td>${type.invertedPercentage}%</td>
            </tr>
          `;
        });
        
        tableHTML += `
              </tbody>
            </table>
          </div>
        `;

        questionContainer.innerHTML = tableHTML;

        const restContainer = document.getElementById('more-stats');
        const showMoreButton = document.getElementById('show-more-button');

        restContainer.style.display = "none";

        showMoreButton.addEventListener('click', () => {
          if (restContainer.style.display === 'none') {
            restContainer.style.display = 'contents';
            showMoreButton.textContent = 'Show Less';
          } else {
            restContainer.style.display = 'none';
            showMoreButton.textContent = 'Show More';
          }
        });
    }

    function restart() {
      homeContainer.style.display = "flex";
      questionContainer.style.display = "none";
      index = 0;
      answers = [];
      myReport = [
        { name: 'energy', score: 0 },
        { name: 'mind', score: 0 },
        { name: 'nature', score: 0 },
        { name: 'tactics', score: 0 },
        { name: 'identity', score: 0 },
      ];
      pathScores = [
        {name: "Preservation", score: 0},
        {name: "Nihility", score: 0},
        {name: "Destruction", score: 0},
        {name: "The Hunt", score: 0},
        {name: "Harmony", score: 0},
        {name: "Abundance", score: 0},
        {name: "Erudition", score: 0},
      ];
      typeScores = [
        {name: "Physical", score: 0},
        {name: "Ice", score: 0},
        {name: "Wind", score: 0},
        {name: "Imaginary", score: 0},
        {name: "Quantum", score: 0},
        {name: "Fire", score: 0},
        {name: "Lightning", score: 0},
      ];
      characterScores = [];
      compatibilityScoreTotal = 0;
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
      const url = window.location.href;
      navigator.clipboard.writeText(url)
      
      alert('Link copied!');
    }
  }
);