function Letter(letter) {
  // store the letter's value as string
  (this.letter = letter),
    // boolean lets us know if letter has been guessed yet
    (this.boolean = false),
    // this method displays "_" until the letter is guessed, thereafter the letter is displayec
    (this.display = function() {
      if (this.boolean) {
        return this.letter;
      } else {
        return "_";
      }
    }),
    // this method allows the the guess to be checked against the actual letter value
    (this.check = function(guess) {
      if (guess == this.letter) {
        this.boolean = true;
      }
    });
}
// the constructor is exported for use in word.js
module.exports = Letter;
