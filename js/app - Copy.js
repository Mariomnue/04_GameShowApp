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
		//letter = letter.map(letter => {
			let li = document.createElement('li');
			li.innerHTML = letter;
			if(letter === " "){
				li.className =  `space`;
			}else{li.className = `hide letter ${letter}`};
			ul.appendChild(li);
		//});
//console.log(ul);
	}





	checkLetter(e){//does the keyup match any letter in the phrase
	   let target = e;
//console.log('checkLetter'+target);
console.log('checkLetter '+letter+ '   ' +target);
	if(letter !== target){//NO Match
		//newGame.removeLife();	//needs work
		return false;
	}else{//matched
//console.log('checkLetter ' +letter+ ' is true');
		return true;
	}
   }

	showMatchedLetter(e, letter){
	let target = e;
		let chL = document.getElementsByClassName(`hide letter ${letter}`);
//		console.log("chL.length " +chL.length);
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
console.log('chosenLetter: ' +chosenLetter);//looking for the value of the key
	if(!this.activePhrase.checkLetter(chosenLetter)){//not a key
		target.className = 'wrong'//do nothing/something to prevent action
		newGame.removeLife();
	}else{
		letter.forEach((letter, index) => {
		if(target.innerHTML === letter){//click and letter match
console.log("letter is true");
			target.className = 'chosen';
			this.activePhrase.showMatchedLetter(letter);
		}
		if(newGame.checkForWin){//did you win? needs work
			//newGame.gameOver;//true
		}
	});
}



	// }else{//matched
	// 	this.activePhrase.forEach((letter, index) => {
	// 		if(letter !== target){
	// 			target.className = 'wrong'
	// 		}else{
	// 			if(this.activePhrase.checkLetter(target, letter)){
	// 				target.className = 'chosen'
	// 				this.activePhrase.showMatchedLetter(target, letter);//in Phrase class
	// 				if(newGame.checkForWin){//needs work
	// 					//newGame.gameOver;//true
	// 				}
	// 			}
	// 		}
	// 	});
	// }
};



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


document.getElementById('qwerty').addEventListener('click', (e) => {
	let target = e
//	console.log(newGame);
	newGame.handleInteraction(target);
	event.preventDefault();
});

document.getElementById('qwerty').addEventListener('keyup', (e) =>{
	if(document.getElementById('overlay').style.display === 'none'){
		newGame.handleInteraction(e.key);
	}
	event.preventDefault();
});
