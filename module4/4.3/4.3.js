'use strict';

const form = document.querySelector('form');
const input = document.querySelector('#query');
const results = document.querySelector('#results');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const query = input.value;

  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    if (!response.ok) throw new Error('Invalid input!');
    const data = await response.json();

    results.innerHTML = '';

    data.forEach((tvShow) => {
      const article = document.createElement('article');

      const nameElement = document.createElement('h2');
      nameElement.textContent = tvShow.show.name;
      article.appendChild(nameElement);

      const urlElement = document.createElement('a');
      urlElement.href = tvShow.show.url;
      urlElement.target = '_blank';
      urlElement.textContent = tvShow.show.url;
      article.appendChild(urlElement);

      const imageElement = document.createElement('img');
      imageElement.src = tvShow.show.image?.medium;
      imageElement.alt = tvShow.show.name;
      article.appendChild(imageElement);

      const summaryElement = document.createElement('div');
      summaryElement.innerHTML = tvShow.show.summary;
      article.appendChild(summaryElement);

      results.appendChild(article);
    });
  } catch (error) {
    console.error(error);
  }
});

