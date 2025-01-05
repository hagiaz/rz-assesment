/* eslint-disable linebreak-style */
/* eslint-disable new-cap */
/* eslint-disable require-jsdoc */
import API_ENDPOINT from '../globals/api-endpoint';

class JikanSource {
  static async fetchMovies(page = 1) {
    const response = await fetch(`${API_ENDPOINT.JIKAN}?page=${page}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const responseJson = await response.json();
    return responseJson.data || [];
  }

  static async detailJikan(id) {
    const response = await fetch(API_ENDPOINT.JIKANDETAIL(id));
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const responseJson = await response.json();
    if (responseJson.data) {
      return responseJson.data;
    }
    throw new Error('Invalid response from API');
  }
}

export default JikanSource;
