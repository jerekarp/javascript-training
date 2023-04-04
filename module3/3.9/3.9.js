'use strict';

const input = document.querySelector('#calculation');
const start = document.querySelector('#start');
const result = document.querySelector('#result');

start.addEventListener('click', () => {
  const calculation = input.value.split(' ').join('');

  const operators = ['+', '-', '*', '/'];
  let operator = null;

  for (let op of operators) {
    if (calculation.includes(op)) {
      operator = op;
      break;
    }
  }

  const [num1, num2] = calculation.split(operator).map(str => parseInt(str));
  let res;

  switch (operator) {
    case '+':
      res = num1 + num2;
      break;
    case '-':
      res = num1 - num2;
      break;
    case '*':
      res = num1 * num2;
      break;
    case '/':
      res = num1 / num2;
      break;
  }

  result.textContent = `Result: ${res}`;
});
