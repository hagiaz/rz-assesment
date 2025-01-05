/* eslint-disable linebreak-style */
/* eslint-disable new-cap */
/* eslint-disable require-jsdoc */
import API_ENDPOINT from '../globals/api-endpoint';

class OMDbSource {
  static async OMDBmovie(page = 1) {
    const response = await fetch(`${API_ENDPOINT.OMDB}&page=${page}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseJson = await response.json();

    if (responseJson.Response === 'True' && responseJson.Search) {
      return responseJson;
    }

    throw new Error(responseJson.Error || 'Invalid response from OMDB API');
  }

  static async detailOMDB(id) {
    const response = await fetch(API_ENDPOINT.OMDBDETAIL(id));

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const responseJson = await response.json();

    if (responseJson.Response === 'True') {
      return responseJson;
    }
    throw new Error(responseJson.Error || 'Invalid response from OMDB API');
  }
}

export default OMDbSource;

