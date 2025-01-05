/* eslint-disable linebreak-style */
/* eslint-disable max-len */
import CONFIG from './config';

const API_ENDPOINT = {
  OMDB: `${CONFIG.BASE_URL_OMDB}&s=naruto`,
  OMDBDETAIL: (id) => `${CONFIG.BASE_URL_OMDB}&i=${id}&plot=full`,
  UPCOMING: `${CONFIG.BASE_URL}movie/upcoming?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=1`,
};

export default API_ENDPOINT;
