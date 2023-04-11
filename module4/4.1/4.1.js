'use strict';

const form = document.querySelector('form');
const input = document.querySelector('#query');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const query = input.value;
  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    if (!response.ok) throw new Error('Invalid TV show name!');
    const data = await response.json();
    console.log(JSON.stringify(data, null, 2));
  } catch (error) {
    console.error(error);
  }
});






