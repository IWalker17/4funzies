const board = require('./components/board').default;
import './style.css';

function tictactoe() {
  const element = document.createElement('div');
  const header = document.createElement('h1');
  
  header.innerHTML = "Tic-Tac-Toe";
  
  element.appendChild(header);
  element.appendChild(board());
  
  console.log("Hello World!");  

  return element;
}

document.body.appendChild(tictactoe());
