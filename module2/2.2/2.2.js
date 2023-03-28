'use strict';
let amountParticipants = parseInt(prompt('Enter a number of participants: '));
let participants = [];
let target = document.querySelector('#target');

for (let i = 0; i < amountParticipants; i++) {
  let name = prompt(`Enter name for participant ${i + 1}:`);
  participants.push(name);
}

participants.sort();

for (let participant of participants) {
  target.innerHTML += `<ol>${participant}</ol>`
}



