/* Treehouse FSJS Techdegree
  * Project 4 - OOP Game App
  * Phrase.js */
let letter;
class Phrase{
     constructor(phrase){//works
          this.phrase = phrase.toLowerCase();
}

     addPhraseToDisplay(aPhrase){//needs Work
          aPhrase = aPhrase;
console.log("aPhrase: " +aPhrase.phrase);//aPhase is still an object. LEAVE. The other is the phrase. Test the program.
          const ul = document.getElementById('phrase');
          letter = aPhrase.phrase.split('')
          letter.forEach((letter, index) => {
               let li = document.createElement('li');
               li.innerHTML = `<li class="hide letter ${letter}">${letter}</li>`
               if(this.letter !== ""){
                    li.class = `hide letter ${letter}`;
               }else{li.class = "space"};
               ul.appendChild(li);
          });
          letsPlay();
     }





   checkLetter(e){

   }

   showMatchedLetter(e){

   }
}









/* Treehouse FSJS Techdegree
* Project 4 - OOP Game App
* Game.js */
let phrases = [];
class Game{
constructor(){//works
      this.missed = 0;
      phrases = [
           'I Smell a Rat',
           'Fit as a Fiddle',
           'A Piece of Cake',
           'Put a Sock In It',
           'Close But No Cigar'
      ];
      let activePhrase = null;
}
startGame(){//works
      const div = document.getElementById('overlay');
      div.style.display = 'none';//make the overlay go away
      this.activePhrase = this.getRandomPhrase();
      this.activePhrase.addPhraseToDisplay(this.activePhrase);
}

getRandomPhrase(){//works
	let aPhrase = new Phrase(`${phrases[Math.floor(Math.random()*phrases.length)]}`)
      return aPhrase //return the object
};

handleInteraction(e){
//console.log('handleInteraction');
     let target = e;
     letter.forEach((letter, index) => {
          target.disabled = true;
          target.style.color = 'gray';
          if(letter !== target.innerHTML){//NO Match
console.log('they do not match ' +target);
               target.class = 'wrong';
               if(target){

               }
               //this.li.class = 'chosen';

          }
          else{//matched
               target.class = 'chosen'
          }
console.log(target.innerHTML+ ' '+this.activePhrase.phrase);
});
     // if(){
     //
     // }
      // removeLife()
      // showMatchedLetter()
      // checkForWin()
      // gameOver()
}

removeLife(){}
checkForWin(){}
gameOver(){}

}












 /* Treehouse FSJS Techdegree
  * Project 4 - OOP Game App
  * app.js */
let newGame;
const start_btn = document.getElementById('btn__reset').addEventListener('click', (e) =>{
	newGame = new Game();
	newGame.startGame();
     event.preventDefault();
})

let kb;
//event handler added to the on-screen keyboard only
const letsPlay = function(){
     console.log('lets play');
     kb = document.getElementById('qwerty').addEventListener('click', (e) => {
          let target = e.target
          newGame.handleInteraction(target);
          event.preventDefault();
          })
     }

//}e.target.innerHTML
