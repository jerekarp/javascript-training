'use strict';
let numbers = [];
for (let i = 0; i < 5; i++) {
  let number = parseInt(prompt(`Enter a number: ${i + 1}:`));
  numbers.push(number);
}

for (let i = numbers.length; i >= 0; i--) {
  console.log(numbers[i]);
}