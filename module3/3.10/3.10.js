'use strict';
const form = document.querySelector('#source');

form.addEventListener('submit', function(evt) {
  evt.preventDefault();
  const firstName = document.querySelector('input[name="firstname"]').value;
  const lastName = document.querySelector('input[name="lastname"]').value;
  const name = `${firstName} ${lastName}`;
  document.querySelector('#target').textContent = `Your name is ${name}`;
});
