var Word = require("./word");
const inquirer = require("inquirer");
// this array is for the orange things this game is based on
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
// global flags for lives, the goalWord (fully correct), and the present mysteryWord (working, changing copy)
let lives = 9;
let goalWord;
let mysteryWord;
// creates a new mysteryWord object from the linked constructor, and a goalWord to compare it against
function newWord(word) {
  mysteryWord = new Word(word);
  mysteryWord.guess(" ");
  goalWord = word;
  goalWord = goalWord
    .split("")
    .join(" ")
    .concat(" ");
}
// picks a random word from the wordPool
function pickword() {
  let word = wordPool[Math.floor(Math.random() * wordPool.length)];
  return word;
}
// (re)initializes the game
function initialize() {
  newWord(pickword());
  console.log(mysteryWord.display());
  inquire();
}
// initial initialization call
initialize();
// this function is the recursive basis of the game, because it is recursive and promise-based nodemon is not required.
function inquire() {
  inquirer
    .prompt([
      {
        name: "letter",
        message: `${lives} lives left. pick a letter`
      }
    ])
    .then(function(ans) {
      // lastWord gives us a baseline to check for answer correctness
      let lastWord = mysteryWord.display();
      //   validation takes only the first letter of input only with ans.letter[0]
      //  the display is case sensitive, but the gameplay is case insensitive
      mysteryWord.guess(ans.letter[0].toUpperCase());
      mysteryWord.guess(ans.letter[0].toLowerCase());
      console.log(mysteryWord.display());
      // we compare the mystery word to the goal word to test for winning
      if (goalWord === mysteryWord.display()) {
        console.log("YOU WIN");
        playAgain();
        // we compare the mystery word to the lastWord to see if nothing has changed, ergo incorrect guess
      } else if (lastWord === mysteryWord.display()) {
        lives -= 1;
        // when you are out of lives, you have lost, but don't despair, you may play again
        if (lives == 0) {
          console.log("YOU LOSE");
          playAgain();
        } else {
          console.log("Nope");
          inquire();
        }
        // if the word was correct
      } else {
        console.log("Nice");
        inquire();
      }
    });
}
// this function runs to allow the player to quit or reinitialize the game after they have won or lost
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
        initialize();
      } else {
        console.log("--Catch you on the flip--");
      }
    });
}
