"use strict";
// exercise 08.02.22, creating an effect where the text is typed out one letter at the time

let iterator;
let text = document.querySelector("#typewriter").textContent;
document.querySelector("#typewriter").textContent = "";

window.addEventListener("load", initTextLoop);

function initTextLoop() {
  console.log("initTextLoop function working");
  iterator = 0;
  textLoop();
}

function textLoop() {
  console.log("i am looping");

  if (iterator < text.length) {
    document.querySelector("#typewriter").textContent += text.charAt(iterator);
    iterator++;
    setTimeout(textLoop, 500);
  }
}
