function concat(array) {
  let strings = ' ';
  for (let i = 0; i < array.length; i++) {
    strings += array[i];
  }

  return strings;
}

const array = ['Johnny', 'DeeDee', 'Joey', 'Marky'];
const concatString = concat(array);
let target = document.querySelector('#target').innerHTML = concatString;