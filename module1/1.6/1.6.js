'use strict';
const answer = confirm('Should I calculate the square root');
let target = document.querySelector('#target');

if (answer === true) {
  const number = parseInt(prompt('Enter a number: '));
  if (number < 0) {
    target.innerHTML = 'The square root of a negative number is not defined';
  } else {
    square_root = Math.sqrt(number);
    target.innerHTML = 'Numbers ' + number + ' square root is: ' + square_root;
  }
} else if (answer === false) {
  target.innerHTML = 'The square root is not calculated.';
}