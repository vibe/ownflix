const Provider = require("./providers/index").tmdb;

const API_KEY = "26b55e337bd07a6a46810bce43adcaf4";

class MediaDB {
  constructor({ provider }) {
    this.providers = [];
    this.provider = provider;
  }
  switchProvider(provider) {
    this.provider = provider;
  }
  async getPopularMovies() {
    return await this.provider.getPopularMovies();
  }
  async getTopRated() {
    return await this.provider.getTopRated();
  }
  // async init() {
  //   this.providers.map(async provider => {
  //     return provider.init();
  //   });
  //   return Promise.all()
  // }
}

const provider = new Provider({ API_KEY });
const mediaDB = new MediaDB({ provider });

module.exports = mediaDB;





(async () => {
  try {
    const provider = await new Provider({API_KEY}).init();



    const mediaDb = await new MediaDB({providers: []}).init();







    console.log(provider);
  }
  catch (e) {
    console.log(e);
  }

    console.log('after');
})();