'use strict';
const amountDices = parseInt(prompt('Enter a number of dice rolls: '));
const sumEyes = parseInt(prompt('Sum of the eye numbers: '));
const loops = 10000;
let count = 0;

for (let i = 0; i < loops; i++) {
  let sum = 0;
  for (let j = 0; j < amountDices; j++) {
    let dice = Math.floor(Math.random() * 6) + 1;
    sum += dice;
  }
    if (sum === sumEyes) {
      count++;
    }
  }

const probability = count / loops * 100;
document.querySelector('#target').innerHTML = `Probability to get sum ${sumEyes} with ${amountDices} dice is ${probability.toFixed(2)} %`;
