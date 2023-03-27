'use strict';
const no1 = parseInt(prompt('Please, type number 1: '));
const no2 = parseInt(prompt('Please, type number 2: '));
const no3 = parseInt(prompt('Please, type number 3: '));

const sum = no1 + no2 + no3;
const product = no1 * no2 * no3;
const average = sum / 3;

document.querySelector('#target').innerHTML = 'Sum is: ' + sum +
    ' Product is: ' + product + ' Average is: ' + average;