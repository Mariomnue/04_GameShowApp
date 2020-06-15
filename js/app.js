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
		letter = aPhrase.phrase.split('');
		 	letter.forEach((letter, index) => {
				let li = document.createElement('li');
				li.innerHTML = letter;
				if(letter === " "){
					li.className =  `space`;
				}else{li.className = `hide letter ${letter}`};
				ul.appendChild(li);
			});
//console.log(ul);
	}




//does the keyup match any letter in the phrase
//create a boolean, an HTMLCollection with 0 length/which is true, return false.
	checkLetter(e, letter){
		target = e;
		console.log(target.innerHTML+ ' ' +letter);
		let bol = 0;
		//console.log(letter.includes(letter));
		letter.forEach((letter, i) => {
			if(target.innerHTML === letter){
				bol += 1;
			}
		});
		if(bol > 0) {
			return true;
		}else{
			return false;
		}
	}

	showMatchedLetter(e, letter){//works
		letter = e;
		let chL = document.getElementsByClassName(`hide letter ${letter}`);
		for(let i=0; i<chL.length; i++){
			chL[i].classList.add('show');
			chL[i].classList.remove('hide');
		};
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
	 div.style.display = 'none';
	 div.disabled = true;//make the overlay go away
	 this.activePhrase = this.getRandomPhrase();
	 this.activePhrase.addPhraseToDisplay(this.activePhrase);
}

getRandomPhrase(){//works
	let aPhrase = new Phrase(`${phrases[Math.floor(Math.random()*phrases.length)]}`)
	return aPhrase //return the object
};

handleInteraction(e){
	let target = e.target;
	target.disabled = true;
	let chosenLetter = e.target.innerHTML;
		if(!this.activePhrase.checkLetter(target, letter)){//not a key
			target.className = 'wrong'//do nothing/something
			newGame.removeLife();
		}else{
			letter.forEach((letter, index) => {
			if(target.innerHTML === letter){//click and letter match
				target.className = 'chosen';
				this.activePhrase.showMatchedLetter(letter);
			}
			if(newGame.checkForWin ===  true){//did you win? needs work
				newGame.gameOver;//true
			}
		});
	}
	//}
}//);
//}//end handleInteraction


removeLife(){
	let lives = document.getElementsByClassName('tries');
	lives[this.missed].firstElementChild.src = `images/lostHeart.png`;
	this.missed += 1;
	if(this.missed === 5) this.gameOver();
}
// checkForWin(){
//      if(win){
//           gameOver();
//      }
// }
	gameOver(){
		console.log('sorry you lose');
	}
}//end Game Class





 /* Treehouse FSJS Techdegree
  * Project 4 - OOP Game App
  * app.js */
let newGame;
const start_btn = document.getElementById('btn__reset').addEventListener('click', (e) =>{
	newGame = new Game();
	newGame.startGame();
	event.preventDefault();
})


document.getElementById('qwerty').addEventListener('click', (e) => {
	if(e.target.className === 'key'){
		target = e;
		newGame.handleInteraction(target);
	}
	event.preventDefault();
});

document.getElementById('qwerty').addEventListener('keyup', (e) =>{
	if(document.getElementById('overlay').style.display === 'none'){
		newGame.handleInteraction(e.key);
	}
	event.preventDefault();
});
