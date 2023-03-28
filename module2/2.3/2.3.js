'use strict';
let target = document.querySelector('#target');
let dogs = [];

for (let i = 1; i < 6; i++) {
  let name = prompt(`Enter name of dog ${i}:`);
  dogs.push(name);
}

dogs.sort().reverse();

for (let dog of dogs) {
  target.innerHTML += `<ul>${dog}</ul>`;
}