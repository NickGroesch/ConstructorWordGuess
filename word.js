let Letter = require("./letter.js");
// this constructor requires the letter constructor
function Word(word) {
  // it populates an array of constructed letter objects
  let wordArray = [];
  for (let index = 0; index < word.length; index++) {
    let letter = new Letter(word[index]);
    wordArray.push(letter);
  }
  this.wordArray = wordArray;
  // this method displays the letter objects
  this.display = function() {
    // each time we reset the display string
    let displayString = "";
    // then concatenate the values of the letter objects display method, adding spaces for clarity of viewing
    this.wordArray.forEach(value => {
      displayString = displayString.concat(value.display()).concat(" ");
    });
    // and returns the display string
    return displayString;
  };
  // this method passes user input of a letter and checks it against each letter in the word
  this.guess = function(letter) {
    for (let index = 0; index < this.wordArray.length; index++) {
      this.wordArray[index].check(letter);
    }
  };
}
module.exports = Word;
