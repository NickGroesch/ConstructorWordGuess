var Word = require("./word");
const inquirer = require("inquirer");

var wordPool = [
  "oranges",
  "cheese puffs",
  "traffic cones",
  "sherbert",
  "julius",
  "william of",
  "embers",
  "crush",
  "burnt",
  "slices",
  "mac and cheese",
  "donald trump face"
];
let lives = 9;
let goalWord;
let mysteryWord;
function newWord(word) {
  mysteryWord = new Word(word);
  mysteryWord.guess(" ");
  //   goalword = word.join(" ");
  goalWord = word;
  goalWord = goalWord
    .split("")
    .join(" ")
    .concat(" ");
}

function pickword() {
  let word = wordPool[Math.floor(Math.random() * wordPool.length)];
  return word;
}
newWord(pickword());
// console.log(mysteryWord);

console.log(mysteryWord.display());

inquire();
function inquire() {
  inquirer
    .prompt([
      {
        name: "letter",
        message: `${lives} lives left. pick a letter`
      }
    ])
    .then(function(ans) {
      let lastWord = mysteryWord.display();
      mysteryWord.guess(ans.letter.toUpperCase());
      mysteryWord.guess(ans.letter.toLowerCase());
      console.log(mysteryWord.display());
      console.log(goalWord);
      if (goalWord === mysteryWord.display()) {
        console.log("YOU WIN");
        playAgain();
      } else if (lastWord === mysteryWord.display()) {
        lives -= 1;
        if (lives == 0) {
          console.log("YOU LOSE");
          playAgain();
        } else {
          inquire();
        }
      } else {
        inquire();
      }
    });
}
function playAgain() {
  inquirer
    .prompt([
      {
        name: "again",
        message: "Will you play again?",
        type: "list",
        choices: [{ name: "Have another go" }, { name: "Not a chance" }]
      }
    ])
    .then(function(ans) {
      if ("Have another go" == ans.again) {
        lives = 9;
        newWord(pickword());
        console.log(mysteryWord.display());
        inquire();
      } else {
        console.log("--Catch you on the flip--");
      }
    });
}
