const axios = require("axios");
const generateAPI = (endpoint, API_KEY, page) => {
    return `https://api.themoviedb.org/3/${endpoint}/?api_key=${API_KEY}&page=${page}`;
  };
  
const popular = (API_KEY, page) => generateAPI("movie/popular", API_KEY, page);
const topRated = (API_KEY, page) => generateAPI('movie/top_rated', API_KEY, page);

class TMDB {
    constructor({API_KEY}) {
        this.API_KEY = API_KEY;
        this.buckets = {
            popular: []
        }
    }

    getPopularMovies({ page=1, adult=false} = {}) {
        return axios
        .get(popular(this.API_KEY, page))
        .then(response => {
            let { page, total_results, total_pages, results: movies } = response.data;
            movies = adult ? movies : movies.filter(movie => !movie.adult);
            this.buckets.popular = [...this.buckets.popular, movies];
            return {
                get: () => {
                    return this.buckets.popular;
                },
                next: async () => {
                    const movies = await this.getPopularMovies({page: ++page});
                    return this.buckets.popular;
                }
            };
        })
        .catch(error => { 
            console.log(error);
            throw Error('Failed to get popular movies'); 
        });
    }

    getTopRated({ page=1, adult=false} = {}) {
        return axios.get(topRated(this.API_KEY, page))
                    .then( response => {
                        console.log(response.data);
                    }) 
    }

    async init() {
        return 'test';
    }
}

module.exports = TMDB;