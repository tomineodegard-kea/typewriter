"use strict";
// exercise 08.02.22, creating an effect where the text is typed out one letter at the time

let maxLength;
let iterator;

// step 1: page load
window.addEventListener("load", loadFunction);

function loadFunc() {
  console.log("loadFunc function working");
  setUp();
}

function setUp() {
  // step 2: get the text
  console.log("setUp function working");
  initTextLoop();
}

function initTextLoop() {
  console.log("initTextLoop function working");
  iterator = 0;
  maxLength = 10;
  textLoop();
}

function textLoop() {
  iterator++;
  console.log("i am looping");
  if (iterator < maxLength) {
    textLoop();
  }
}

// step 3: show the text, one at the time
// step 4:
// step 5:
