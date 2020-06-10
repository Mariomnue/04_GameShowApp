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
          const ul = document.getElementById('phrase').firstElementChild;
          letter = aPhrase.phrase.split('')
          letter.forEach((letter, index) => {
               let li = document.createElement('li');
               if(letter === " "){
                    li.className =  `space`;
               }else{li.className = `hide letter ${letter}`};
console.log(ul);
               ul.appendChild(li);
          });
//          ul.appendChild(li);

          letsPlay();
     }





   checkLetter(e){

   }

   showMatchedLetter(e){
     let target = e;

     letter.forEach((letter, index) => {
          if(target.innerHTML === letter){
console.log();
               let chL = document.getElementsByClassName(`hide letter ${letter}`)//phrase letters
               chL.className = 'show';

console.log(chL.innerHTML);
          }
     });
//`show letter ${letter}`



console.log('showMatchedLetter '+this.phrase+ '  ' +target.innerHTML);
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
     target.disabled = true;
     target.style.color = 'white';//////style not right
     letter.forEach((letter, index) => {
          if(letter !== target.innerHTML){//NO Match
console.log('they do not match ' +letter+ '   ' +target.innerHTML);
               target.class = 'wrong';///////how to call the on-screen keyboad
               //removeLife();
          }else{//matched
               target.class = 'chosen'///////how to call the on-screen keyboad

               this.activePhrase.showMatchedLetter(target);//in the Phrase class

               //if(checkForWin()){//true
               //     gameOver();
               //}
console.log('they DO match ' +target.innerHTML);
          }

     })
console.log(target.innerHTML+ ' '+this.activePhrase.phrase);
};
      // removeLife()
      // showMatchedLetter()
      // checkForWin()
      // gameOver()


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
