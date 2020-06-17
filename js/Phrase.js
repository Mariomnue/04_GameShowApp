/* Treehouse FSJS Techdegree
  * Project 4 - OOP Game App
  * Phrase.js */
let letter;
class Phrase{
	constructor(phrase){//works
		this.phrase = phrase.toLowerCase();
		this.letterCount = 0;
		this.spaceCount  = 0;
		this.winCount = 0;
		this.wordCount = 0;
}

	addPhraseToDisplay(aPhrase){//works
		aPhrase = aPhrase;
console.log("aPhrase: " +aPhrase.phrase);//aPhase is still an object. LEAVE. The other is the phrase. Test the program.
	const ul = document.getElementById('phrase').firstElementChild;
	letter = aPhrase.phrase.split('');
	 	letter.forEach((letter, index) => {
			let li = document.createElement('li');
			li.innerHTML = letter;
			if(letter === " "){
				li.className =  `space`;
				this.spaceCount += 1;//account for the spaces
			}else{li.className = `hide letter ${letter}`};
			ul.appendChild(li);
			this.letterCount += 1;
			if(this.spaceCount === this.wordCount ){
				this.wordCount += 1;
			}
		});
	}




//does the keyup match any letter in the phrase
//create a boolean, an HTMLCollection with 0 length/which is true, return false.
//Read more about this in the #unit-04 thread
	checkLetter(letter){//works
          const boolean = document.getElementsByClassName(letter).length === 0;
              return !boolean;
	}

	showMatchedLetter(e, letter){//works
		letter = e;
		let chL = document.getElementsByClassName(`hide letter ${letter}`);
		for(let i=0; i<chL.length; i++){
			chL[i].classList.add('show');
			chL[i].classList.remove('hide');
			this.winCount += 1;
		}
	}
}
