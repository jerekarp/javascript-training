'use strict';
const names = ['John', 'Paul', 'Jones'];
const ul = document.querySelector('#target');

ul.innerHTML = '';
for (const name of names) {
  ul.innerHTML += '<li>' + name + '</li>';
}