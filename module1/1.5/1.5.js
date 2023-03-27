'use strict';
const year = prompt('Enter a year: ');
let target = document.querySelector('#target');

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  target.innerHTML = 'A year is a leap year.';
} else {
  target.innerHTML = 'A year is not a leap year.';
}