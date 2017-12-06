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

  async getTrending(type, options) {
    const { provider } = this.provider;
    return provider.getTrending(type, options);
  }
  async init() {
    this.providers = await Promise.all(
      this.providers.map(async ({name, provider}) =>  ({ name, provider: await provider.init()})
    ));
    return this;
  }
}

module.exports = MediaDB;

// (async () => {
//   try {
//     const TMDBProvider = new Provider({API_KEY});
    
//     const providers = [
//       { name: 'TMDB', provider: TMDBProvider },
//     ];

//     const mediaDB = await new MediaDB({ providers, defaultProvider: 'TMDB' }).init();


//     const movies = await mediaDB.getTrending('movies', {
//       page: 1
//     });

//     const shows = await mediaDB.getTrending('shows', {
//       page: 1
//     });

//     console.log('Movies: ', movies);
//     console.log('Shows: ', shows);
//   }
//   catch (e) {
//     console.log('Error Catcher: ', e);
//   }
// })();