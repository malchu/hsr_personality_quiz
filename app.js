import questions from './questions.js';
import characters from './characters.js'

document.addEventListener('DOMContentLoaded', function() 
  {
    const images = [
      "./assets/mini.gif",
      "./assets/mini1.gif",
      "./assets/loading.gif",
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
    
    const button = document.getElementById("start-button");
    button.addEventListener("click", function() 
      {
        let homePanel = document.getElementById("home-container");
        let questionPanel = document.getElementById("question-container");
        homePanel.style.display = "none";
        questionPanel.style.display = "flex";
      }
    );
  }
);