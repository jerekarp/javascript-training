'use strict';
const year = prompt('Enter a year: ');
let target = document.querySelector('#target');

if (0 === year % 4) {
  target.innerHTML = 'A year is a leap year.';
} else if ((0 === year % 100) || (0 === year % 400)) {
  target.innerHTML = 'A year is a leap year.';
} else {
  target.innerHTML = 'A year is not a leap year.';
}