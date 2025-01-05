/* eslint-disable linebreak-style */
import UrlParser from '../../routes/url-parser';
import JikanSource from '../../data/jikan-source';
import {createJikanDetailTemplate} from '../templates/template-creator';

const Detail2 = {
  async render() {
    return `
      <div id="movie" class="movie"></div>
    `;
  },

  async afterRender() {
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const movie = await JikanSource.detailJikan(url.id);
      const movieContainer = document.querySelector('#movie');
      movieContainer.innerHTML = createJikanDetailTemplate(movie);
    } catch (error) {
      console.error('Error rendering movie details:', error);
    }
  },
};

export default Detail2;
