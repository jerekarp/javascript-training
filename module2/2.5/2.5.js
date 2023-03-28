'use strict';
let numbers = [];
let ok = false;

while (!ok) {
  let num = parseInt(prompt('Enter a number: '));
  if (numbers.includes(num)) {
    alert('Number has already been given!');
    ok = true;
  }
  numbers.push(num);
}

numbers.sort((a, b) => a - b);
for (let i of numbers) {
  console.log(i);
}