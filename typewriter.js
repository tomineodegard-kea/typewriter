"use strict";
// exercise 08.02.22, creating an effect where the text is typed out one letter at the time

const typeKey1 = document.querySelector("#typekey1");
const typeKey2 = document.querySelector("#typekey2");
const typeSpace = document.querySelector("#typespace");
const typeLast = document.querySelector("#typelast");
const typeReturn = document.querySelector("#typereturn");

let iterator = 0;
let text = document.querySelector("#typewriter").textContent;
document.querySelector("#typewriter").textContent = "";

window.addEventListener("load", start);

function start() {
  console.log("Click anywhere to start the typewriter");
  document.addEventListener("click", textLoop);
}

function textLoop() {
  console.log("i am looping");

  if (iterator < text.length) {
    document.querySelector("#typewriter").textContent += text.charAt(iterator);
    iterator++;
    setTimeout(textLoop, 500);
  }

  let playRandom = Math.floor(Math.random() * 2 + 1);
  if (playRandom == 1) {
    typeKey1.play();
  } else if (playRandom == 2) {
    typeKey2.play();
  }

  if (text.charAt(iterator - 1) === " ") {
    typeSpace.play();
  }
}
