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
	 this.score = '';

}
//start the game
startGame(){//works
	 const div = document.getElementById('overlay');
	 div.style.display = 'none';
	 div.disabled = true;//make the overlay go away
	 this.activePhrase = this.getRandomPhrase();
	 this.activePhrase.addPhraseToDisplay(this.activePhrase);
}

//start with a new phrase
getRandomPhrase(){//works
	let aPhrase = new Phrase(`${phrases[Math.floor(Math.random()*phrases.length)]}`)
	return aPhrase //return the object
};

//handle the click
handleInteraction(letter){//works//keyboard clicked letter
     const qwertyArr = document.getElementsByClassName('key');
     Array.from(qwertyArr).forEach((btn) => {
          if (btn.innerText === letter && btn.disabled === false) {//matches
               btn.disabled = true;
     		if(!this.activePhrase.checkLetter(letter)){//not a key
     			btn.classList.add('wrong')//do nothing/something
     			newGame.removeLife();
     		}else{
     			letters.forEach((letter, index) => {
     			if(btn.innerHTML === letter){//click and letter match
     				btn.classList.add('chosen');
     				this.activePhrase.showMatchedLetter(letter);
     			}
     			if(newGame.checkForWin() ===  true){//did you win?
     				newGame.gameOver;//true
     			}
     		});
          }
     }
})
}//end handleInteraction


//remove a life is the guess was wrong
removeLife(){//works
	let lives = document.getElementsByClassName('tries');
	lives[this.missed].firstElementChild.src = `images/lostHeart.png`;
	this.missed += 1;
	if(this.missed === 5) this.gameOver();
     //this.phraserAlert();
}

//check that missed lives is not 5 or more and the complete phrase is correct.
//if all the letter on screen have been show.
checkForWin(){//works
	if(this.missed < 5){
		if(this.activePhrase.letterCount === this.activePhrase.winCount + this.activePhrase.spaceCount){
			this.score = 'winner'
			newGame.gameOver();
		}
     }else{
		this.score = 'loser'
		newGame.gameOver();
	}
}

//if all the phrase letters have been revealed
gameOver(){//works
	const div = document.getElementById('overlay');
	let message = document.getElementById('game-over-message');
	div.style.display = '';
	if(this.score === 'winner'){
		message.innerHTML = "You won the game!"
		div.className = 'win';//
	}else if(this.score = 'loser'){
		message.innerHTML = "Sorry, try again"
		div.className = 'lose';//
	}
}

//reset the game board. clear the keyboard. reset tries.
reset(){
	let ul = document.getElementById('phrase').firstElementChild;
	ul.innerHTML = '';

	const qwerty = document.getElementsByClassName('key');
	Array.from(qwerty).forEach((key) => {
		key.className = 'key';
		key.disabled = false;
	});

	const lives = document.getElementsByClassName('tries');
	Array.from(lives).forEach((life) => {
		life.firstElementChild.src = 'images/liveHeart.png';
	});
  }


}
