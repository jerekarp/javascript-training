'use strict';

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

let target = document.querySelector('#target');
let dice = 0
while (dice !== 6) {
  dice = rollDice();
  target.innerHTML += `<ul>${dice}</ul>`;
}

