'use strict';

const sides = parseInt(prompt('Enter the number of sides on the dice: '));
const maxNum = sides

function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

let target = document.querySelector('#target');
let dice = 0;
while (dice !== maxNum) {
  dice = rollDice(sides);
  target.innerHTML += `<ul>${dice}</ul>`;
}