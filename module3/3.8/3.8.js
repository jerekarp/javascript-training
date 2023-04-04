'use strict';

const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const operation = document.querySelector('#operation');
const result = document.querySelector('#result');
const start = document.querySelector('#start');

function calculate() {
  const n1 = parseInt(num1.value);
  const n2 = parseInt(num2.value);
  let res;

  switch (operation.value) {
    case 'add':
      res = n1 + n2;
      break;
    case 'sub':
      res = n1 - n2;
      break;
    case 'multi':
      res = n1 * n2;
      break;
    case 'div':
      res = n1 / n2;
      break;
  }

  result.innerHTML = `Result: ${res}`;
}

start.addEventListener('click', calculate);