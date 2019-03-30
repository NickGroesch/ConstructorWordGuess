let Letter = require("./letter.js");

function Word(word) {
  let wordArray = [];
  for (let index = 0; index < word.length; index++) {
    let letter = new Letter(word[index]);
    wordArray.push(letter);
  }
  this.wordArray = wordArray;
  this.display = function() {
    let displayString = "";

    this.wordArray.forEach(value => {
      displayString = displayString.concat(value.display()).concat(" ");
    });
    // for (let index = 0; index < this.wordArray.length; index++) {
    //   this.displayString.concat(wordArray[index].display()).concat(" ");
    // }
    return displayString;
  };
  this.guess = function(letter) {
    for (let index = 0; index < this.wordArray.length; index++) {
      this.wordArray[index].check(letter);
    }
  };
}
module.exports = Word;

// let word = new Word("jamestown");
// console.log("hey", word.display());
// // console.log(word.wordArray);
// word.guess("m");
// console.log(word.display());
// word.guess("e");
// console.log(word.display());
