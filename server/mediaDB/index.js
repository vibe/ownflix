const Provider = require("./providers/index").tmdb;

const API_KEY = "26b55e337bd07a6a46810bce43adcaf4";

class MediaDB {
  constructor({ provider }) {
    this.provider = provider;
  }
  switchProvider(provider) {
    this.provider = provider;
  }
  getPopularMovies() {
    return this.provider.getPopularMovies();
  }
  async getTopRated() {
    return await this.provider.getTopRated();
  }
}

const provider = new Provider({ API_KEY });
const mediaDB = new MediaDB({ provider });


(async () => {
  try {
    const movies = await mediaDB.getPopularMovies(); //movies
    const topRated = await mediaDB.getTopRated();
  }
  catch (e) {
    console.log(e);
  }

    console.log('after');
})();


// const movies = mediaDB.getPopularMovies();

// movies.next();
// movies.get();
