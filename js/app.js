 /* Treehouse FSJS Techdegree
  * Project 4 - OOP Game App
  * app.js */
 let newGame;
 const start_btn = document.getElementById('btn__reset').addEventListener('click', (e) => {
      if (newGame) {
           newGame.reset();
      }
      newGame = new Game();
      newGame.startGame();
      document.addEventListener('keyup', (e) => {
           newGame.handleInteraction(e.key); //keyboard does not have a class
           event.preventDefault();
      })
      event.preventDefault();
 })


 document.getElementById('qwerty').addEventListener('click', (e) => {
      console.log(e.target.className);
      if (e.target.className === 'key') {
           newGame.handleInteraction(e.target.innerText);
           console.log(e.target.innerText);
      }
      event.preventDefault();
 });

 document.getElementById('qwerty').addEventListener('keyup', (e) => {
      if (document.getElementById('overlay').style.display === 'none') {
           newGame.handleInteraction(e.innerHTML);
      }
      event.preventDefault();
 });
