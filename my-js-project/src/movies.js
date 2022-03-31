const results = document.querySelector("#results");

const insertMovie = (data) => {
  data.Search.forEach((movie) => {
    const newMovie = `<li>
        <img src="${movie.Poster}" />
        <p>${movie.Title} </p>
        </li>`;
    results.insertAdjacentHTML('beforeend', newMovie);
  });
};

const searchMovies = (query) => {
  fetch(`http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`)
    .then(response => response.json()).then(insertMovie);
};

export { insertMovie, searchMovies, results };
