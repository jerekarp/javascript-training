'use strict';
let numbers = [];
let num = 1;
while (num !== 0) {
  num = parseInt(prompt('Enter a number (0 to finish): '));
  numbers.push(num);
}

numbers.sort((a, b) => a - b).reverse();

for (let i of numbers) {
  console.log(i);
}