/* Treehouse FSJS Techdegree
  * Project 4 - OOP Game App
  * Phrase.js */
class Phrase{
   constructor(phrase){
        this.phrase = phrase.toLowerCase();
console.log('phrase maker');
   }

   addPhraseToDisplay(aPhrase){//needs Work
        aPhrase = aPhrase;
        const ul = document.getElementById('phrase');
        let letter = this.aPhrase.split('')
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
