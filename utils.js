export function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export function copyCurrentUrl() {
  const url = window.location.href;
  navigator.clipboard.writeText(url)
  
  alert('Link copied!');
}

export function startSlideshow(images) {
  let currentImageIndex = 0;
  const slideshowImage = document.getElementById('background');
  function showNextSlide() {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
      currentImageIndex = 0;
    }
    slideshowImage.src = images[currentImageIndex];
    setTimeout(showNextSlide, 3000);
  }
  showNextSlide();
}

export function selectChoice(item, selectedChoice) {
  if (selectedChoice) {
    selectedChoice.classList.remove("selected");
  }
  item.classList.add("selected");
  selectedChoice = item;
  return selectedChoice;
}