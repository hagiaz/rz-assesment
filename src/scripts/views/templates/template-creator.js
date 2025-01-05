/* eslint-disable linebreak-style */
/* eslint-disable max-len */

const createMovieDetailTemplate = (movie) => `
  <h2 class="movie__title">${movie.Title}</h2>
  <img class="movie__poster" src="${movie.Poster}" alt="${movie.Title}" />
  <div class="movie__info">
    <h3>Information</h3>
    <h4>Year</h4>
    <p>${movie.Year}</p>
    <h4>Rated</h4>
    <p>${movie.Rated}</p>
    <h4>Release Date</h4>
    <p>${movie.Released}</p>
    <h4>Runtime</h4>
    <p>${movie.Runtime}</p>
    <h4>Genre</h4>
    <p>${movie.Genre}</p>
    <h4>Director</h4>
    <p>${movie.Director || 'N/A'}</p>
    <h4>Actors</h4>
    <p>${movie.Actors || 'N/A'}</p>
    <h4>Rating</h4>
    <p>${movie.imdbRating || 'N/A'} / 10</p>
  </div>
  <div class="movie__overview">
    <h3>Plot</h3>
    <p>${movie.Plot}</p>
  </div>
`;


const createMovieItemTemplate = (movie) => `
  <div class="movie-item">
    <div class="movie-item__header">
      <img class="movie-item__header__poster" alt="${movie.Title}"
           src="${movie.Poster || 'https://picsum.photos/id/666/800/450?grayscale'}">
    </div>
    <div class="movie-item__content">
      <h3><a href="/#/detail/${movie.imdbID}">${movie.Title} (${movie.Type})</a></h3>
      <p>Year: ${movie.Year}</p>
      <button class="movie-item__detail-button">
        <a href="/#/detail/${movie.imdbID}">View Details</a>
      </button>
    </div>
  </div>
`;

export {
  createMovieItemTemplate,
  createMovieDetailTemplate,
};
