const axios = require("axios");
const generateAPI = (endpoint, API_KEY) => {
    return `https://api.themoviedb.org/3/${endpoint}/?api_key=${API_KEY}`;
  };
  
  const popular = (API_KEY) => generateAPI("movie/popular", API_KEY);
  
class TMDB {
    constructor({API_KEY}) {
        this.API_KEY = API_KEY;
        console.log(this.API_KEY);
    }
    getPopularMovies() {
        return axios
        .get(popular(this.API_KEY))
        .then(response => console.log(response.data))
        .catch(error => {
          console.error(error);
        });
    }
}


module.exports = TMDB;