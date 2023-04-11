'use strict';

const form = document.querySelector('form');
const input = document.querySelector('#query');
const results = document.querySelector('#results');

async function getJoke(event) {
  event.preventDefault();

  const query = input.value;
  try {
    const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`);
    if (!response.ok) {
      throw new Error('Joke not found!');
    }
    const data = await response.json();
    results.innerHTML = '';

    data.result.forEach((joke) => {
      const article = document.createElement('article');
      const jokeElement = document.createElement('p');
      jokeElement.textContent = joke.value;
      article.appendChild(jokeElement);
      results.appendChild(article);
    });
  } catch (error) {
    console.log(error.message);
  }
}

form.addEventListener('submit', getJoke);
