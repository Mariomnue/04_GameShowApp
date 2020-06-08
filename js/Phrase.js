/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
 class Phrase{
      constructor(phrase){
          this.phrase = phrase.toLowerCase();
      }

      addPhraseToDisplay(){//needs Work
          const ul = document.getElementById('phrase');
          let letter = this.phrase.split('')
console.log(letter);
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


const phrases = [
     'I Smell a Rat',
     'Fit as a Fiddle',
     'A Piece of Cake',
     'Put a Sock In It',
     'Close But No Cigar'
];


//const newPhrase = new Phrase(`${phrases[Math.floor(Math.random()*phrases.length)]}`);
//newPhrase.addPhraseToDisplay();
