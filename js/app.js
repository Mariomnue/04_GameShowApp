/* Treehouse FSJS Techdegree
  * Project 4 - OOP Game App
  * Phrase.js */
class Phrase{
   constructor(phrase){//works
        this.phrase = phrase.toLowerCase();
}

   addPhraseToDisplay(aPhrase){//needs Work
        aPhrase = aPhrase;
console.log("aPhrase: " +aPhrase.phrase);//aPhase is still an object. LEAVE. The other is the phrase. Test the program.
        const ul = document.getElementById('phrase');
        let letter = aPhrase.phrase.split('')
        letter.forEach((letter, index) => {
             let li = document.createElement('li');
             li.innerHTML = `<li class="hide letter ${this.letter}">${this.letter}</li>`
             if(this.letter !== ""){
                  li.class = `hide letter ${this.letter}`;
             }else{li.class = "space"};
             ul.appendChild(li);
             letsPlay();
        });


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












 /* Treehouse FSJS Techdegree
  * Project 4 - OOP Game App
  * app.js */
//let newGame;
const start_btn = document.getElementById('btn__reset').addEventListener('click', (e) =>{
	let newGame = new Game();
	newGame.startGame();
     event.preventDefault();
})

//event handler added to the on-screen keyboard only
const letsPlay = function(){
     console.log('lets play');
     const kb = document.getElementById('qwerty').addEventListener('click', (e) => {
               this.handleInteraction()
//                let target = e.target.innerHTML
 console.log(target);
//                if(target === ){
//
//                }
               event.preventDefault();     //for each newGame.handleInteraction()
          })
     }

//}
