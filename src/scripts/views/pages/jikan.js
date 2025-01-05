/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable new-cap */
import JikanSource from '../../data/jikan-source';
import {createJikanItemTemplate} from '../templates/template-creator';

const Jikan = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Anime List (From Jikan)</h2>
        <input type="text" id="searchInput" placeholder="Search titles..." class="search-input"/>
        <div id="movies" class="movies"></div>
        <div id="pagination" class="pagination"></div>
      </div>
    `;
  },

  async afterRender(page = 1) {
    const LIMIT = 20;
    try {
      const response = await JikanSource.fetchMovies();
      const animeList = response.map((item) => item.entry).flat();

      const startIndex = (page - 1) * LIMIT;
      const endIndex = page * LIMIT;
      const paginatedAnime = animeList.slice(startIndex, endIndex);

      const searchInput = document.querySelector('#searchInput');
      searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const filteredAnime = animeList.filter((anime) => {
          return anime.title.toLowerCase().includes(query);
        });
        renderAnime(filteredAnime.slice(startIndex, endIndex), page);
      });

      const renderAnime = (animeList, page) => {
        const moviesContainer = document.querySelector('#movies');
        moviesContainer.innerHTML = '';

        if (animeList && animeList.length > 0) {
          animeList.forEach((anime) => {
            moviesContainer.innerHTML += createJikanItemTemplate(anime);
          });
        } else {
          moviesContainer.innerHTML = '<p>No anime found.</p>';
        }

        const paginationContainer = document.querySelector('#pagination');
        paginationContainer.innerHTML = `
          <button class="pagination__button" id="previousPage" ${page <= 1 ? 'disabled' : ''}>Previous</button>
          <span>Page ${page}</span>
          <button class="pagination__button" id="nextPage" ${endIndex >= animeList.length ? 'disabled' : ''}>Next</button>
        `;

        document.querySelector('#previousPage').addEventListener('click', () => {
          if (page > 1) {
            this.afterRender(page - 1);
          }
        });

        document.querySelector('#nextPage').addEventListener('click', () => {
          if (endIndex < animeList.length) {
            this.afterRender(page + 1);
          }
        });
      };

      renderAnime(paginatedAnime, page);
    } catch (error) {
      console.error('Error fetching anime:', error);
    }
  },
};

export default Jikan;
