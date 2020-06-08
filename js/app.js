  /**
   *
   * PHRASE.JS SECTION
   *
   */


   /* Treehouse FSJS Techdegree
    * Project 4 - OOP Game App
    * Phrase.js */
class Phrase{
	constructor(phrase){
		this.phrase = phrase.toLowerCase();
console.log('phrase maker');
	}

	addPhraseToDisplay(){//needs Work
		const ul = document.getElementById('phrase');
		let letter = this.phrase.split('')
		let li = document.createElement('li');
		li.innerHTML = `<li class="hide letter ${this.letter}">${this.letter}</li>`
		if(this.letter !== ""){
			li.class = `hide letter ${this.letter}`;
		}else{li.class = "space"};
		ul.appendChild(li);
	}

	checkLetter(e){

	}

	showMatchedLetter(e){

	}
}


// const phrases = [
// 	'I Smell a Rat',
// 	'Fit as a Fiddle',
// 	'A Piece of Cake',
// 	'Put a Sock In It',
// 	'Close But No Cigar'
// ];
// const newPhrase = new Phrase(`${phrases[Math.floor(Math.random()*phrases.length)]}`);
// newPhrase.addPhraseToDisplay();
// console.log(newPhrase);



   /**
    *
    * GAME.JS SECTION
    *
    */


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
console.log(this.phrases);
		const div = document.getElementById('overlay');
		div.style.display = 'none';
		const activePhrase = new Phrase(`${this.phrases[Math.floor(Math.random()*this.phrases.length)]}`)
		activePhrase.addPhraseToDisplay();
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


/**
 *
 * APP.JS SECTION
 *
 */


 /* Treehouse FSJS Techdegree
  * Project 4 - OOP Game App
  * app.js */

const start_btn = document.getElementById('btn__reset');
start_btn.addEventListener('click', (e) =>{
	const newGame = new Game();
	newGame.startGame();
//console.log('start_btn');
})
