const start_year = +prompt('Start year is: ');
const end_year = parseInt(prompt('End year is: '));

document.querySelector('#start_year').innerHTML = start_year.toString();
document.querySelector('#end_year').innerHTML = end_year.toString();
let leap_years = document.querySelector('#leap_years')


for (let year = start_year; year <= end_year; year++){
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    leap_years.innerHTML += `<li><b>${year}</b></li>`
  }
}
