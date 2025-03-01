/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable new-cap */
import OMDbSource from '../../data/omdb-source';
import {createMovieItemTemplate} from '../templates/template-creator';

const Omdb = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Naruto (From OMDB)</h2>
        <input type="text" id="searchInput" placeholder="Search titles..." class="search-input"/>
        <div id="movies" class="movies"></div>
        <div id="pagination" class="pagination"></div>
      </div>
    `;
  },

  async afterRender(page = 1) {
    try {
      const response = await OMDbSource.OMDBmovie(page);
      const movies = response.Search;

      const searchInput = document.querySelector('#searchInput');
      searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const filteredMovies = movies.filter((movie) => {
          return movie.Title.toLowerCase().includes(query);
        });
        renderMovies(filteredMovies, page);
      });

      const renderMovies = (movies, page) => {
        const moviesContainer = document.querySelector('#movies');
        moviesContainer.innerHTML = '';

        if (movies && movies.length > 0) {
          movies.forEach((movie) => {
            moviesContainer.innerHTML += createMovieItemTemplate(movie);
          });
        } else {
          moviesContainer.innerHTML = '<p>No movies found.</p>';
        }

        const paginationContainer = document.querySelector('#pagination');
        paginationContainer.innerHTML = `
          <button class="pagination__button" id="previousPage" ${page <= 1 ? 'disabled' : ''}>Previous</button>
          <span>Page ${page}</span>
          <button class="pagination__button" id="nextPage">Next</button>
        `;

        document.querySelector('#previousPage').addEventListener('click', () => {
          if (page > 1) {
            this.afterRender(page - 1);
          }
        });

        document.querySelector('#nextPage').addEventListener('click', () => {
          this.afterRender(page + 1);
        });
      };

      renderMovies(movies, page);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  },

};

export default Omdb;
