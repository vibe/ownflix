const MediaDB = require('../../../mediaDB');
const TMDBProvider = require('../../../mediaDB/providers/index').TMDB;
const API_KEY = "26b55e337bd07a6a46810bce43adcaf4";

const mediaDb = {
    init: async () => {
        const tmdb = new TMDBProvider({API_KEY});
        
        const providers = [
            { name: 'TMDB', provider: tmdb },
        ];
        return new MediaDB({ providers, defaultProvider: 'TMDB' }).init();
    }
};

module.exports = mediaDb;