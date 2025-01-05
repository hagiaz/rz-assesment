/* eslint-disable linebreak-style */
import UrlParser from '../../routes/url-parser';
import OMDbSource from '../../data/omdb-source';
import {createMovieDetailTemplate} from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div id="movie" class="movie"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const movie = await OMDbSource.detailOMDB(url.id);
      const movieContainer = document.querySelector('#movie');
      movieContainer.innerHTML = createMovieDetailTemplate(movie);
    } catch (error) {
      console.error('Error rendering movie detail:', error);
    }
  },
};

export default Detail;
