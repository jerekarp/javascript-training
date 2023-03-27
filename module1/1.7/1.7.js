const amount = parseInt(prompt('Enter a number of dice rolls: '));
let sum = 0;

for (let i = 0; i < amount; i++) {
  let dice = Math.floor(Math.random() * 6) + 1;
  sum += dice;
}

document.querySelector('#target').innerHTML = "Sum of numbers: " + sum;