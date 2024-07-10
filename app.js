import characters from "./characters";

const button = document.getElementById("start-button");

button.addEventListener("click", function() {
  console.log(characters[0].name);
});