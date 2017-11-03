const Provider = require("./providers/index").tmdb;

const API_KEY = "26b55e337bd07a6a46810bce43adcaf4";

class MediaDB {
  constructor({ provider }) {
    this.provider = provider;
  }
  switchProvider(provider) {
      this.provider = provider;
  }
  getPopularMovies({ page = 0}) {
    return this.provider.getLatestMovies();
    // return {
    //     next:
    //     movies
    // }
  }
  getLatestMovies() {
      return this.provider.getLatestMovies();
  }
}

const provider = new Provider({ API_KEY });
const mediaDB = new MediaDB({ provider });

console.log(mediaDB.getPopularMovies());


// const movies = mediaDB.getPopularMovies();

// movies.next();
// movies.get();