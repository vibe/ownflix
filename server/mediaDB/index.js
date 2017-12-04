const Provider = require("./providers/index").tmdb;

const API_KEY = "26b55e337bd07a6a46810bce43adcaf4";

class MediaDB {
  constructor({ providers=[], defaultProvider='' }) {
    if (!providers.length) { throw { message: 'No providers have been provided, failed to create instance.'}};
    this.providers = providers;
    this.provider = defaultProvider ? this.switchProvider(defaultProvider) : this.providers[0];
  }
  switchProvider(name) {
    return this.providers.reduce((selectedProvider, provider) => provider.name === name ? provider : selectedProvider);
  }
  async getPopular(type, options) {
    const { provider } = this.provider;
    return provider.getPopular(type, options);
  }
  async getPopularMovies() {
    const { provider } = this.provider;
    return provider.getPopularMovies();
  }
  async getTopRated(type, options) {
    const { provider } = this.provider;
    return provider.getTopRated(options);
  }
  async init() {
    this.providers = await Promise.all(
      this.providers.map(async ({name, provider}) =>  ({ name, provider: await provider.init()})
    ));
    return this;
  }
}

module.exports = MediaDB;

(async () => {
  try {
    const TMDBProvider = new Provider({API_KEY});
    
    const providers = [
      { name: 'TMDB', provider: TMDBProvider },
    ];

    const mediaDB = await new MediaDB({ providers, defaultProvider: 'TMDB' }).init();

    const movies = await mediaDB.getPopular('movies', {
      page: 2
    });
    const movies2 = await mediaDB.getTopRated('movies', {
      page: 1
    });
    // console.log(movies2);
  }
  catch (e) {
    console.log('Error Catcher: ', e);
  }
})();