/* Treehouse FSJS Techdegree
* Project 4 - OOP Game App
* Game.js */

class Game{
constructor(){
console.log("new game");
      let missed = 0;
      const phrases = [
           'I Smell a Rat',
           'Fit as a Fiddle',
           'A Piece of Cake',
           'Put a Sock In It',
           'Close But No Cigar'
      ];
console.log(phrases.length);
      let activePhrase = null;
}
startGame(){
//console.log(phrases);
      const div = document.getElementById('overlay');
      div.style.display = 'none';//make the overlay go away
      this.activePhrase = newGame.getRandomPhrase();
console.log(this.activePhrase);
      addPhraseToDisplay(this.activePhrase);
}

getRandomPhrase(){
      activePhrase = new Phrase(`${this.phrases[Math.floor(Math.random()*this.phrases.length)]}`)
      return activePhrase;
console.log('hell');

}

handleInteraction(){
      removeLife()
      showMatchedLetter()
      checkForWin()
      gameOver()
}

removeLife(){}
checkForWin(){}
gameOver(){}

}
