function Letter(letter) {
  (this.letter = letter),
    (this.boolean = false),
    (this.display = function() {
      if (this.boolean) {
        return this.letter;
      } else {
        return "_";
      }
    }),
    (this.check = function(guess) {
      if (guess == this.letter) {
        this.boolean = true;
      }
    });
}
module.exports = Letter;

// let letter = new Letter("x");
// letter.check("x");
// console.log(letter);
// console.log(letter.display());
