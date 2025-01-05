/* eslint-disable linebreak-style */
/* eslint-disable max-len */
import CONFIG from './config';

const API_ENDPOINT = {
  OMDB: `${CONFIG.BASE_URL_OMDB}&s=naruto`,
  OMDBDETAIL: (id) => `${CONFIG.BASE_URL_OMDB}&i=${id}&plot=full`,
  JIKAN: `${CONFIG.BASE_URL_JIKAN}/recommendations/anime`,
  JIKANDETAIL: (id) => `${CONFIG.BASE_URL_JIKAN}/anime/${id}/full`,
};

export default API_ENDPOINT;
