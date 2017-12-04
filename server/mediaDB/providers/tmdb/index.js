const axios = require("axios");

class TMDB {
    constructor({ API_KEY }) {
        this.API_KEY = API_KEY;
        this.API_URL = 'https://api.themoviedb.org/3/';
        this.config = {
            "images": {
              "base_url": "http://image.tmdb.org/t/p/",
              "secure_base_url": "https://image.tmdb.org/t/p/",
              "backdrop_sizes": [
                "w300",
                "w780",
                "w1280",
                "original"
              ],
              "logo_sizes": [
                "w45",
                "w92",
                "w154",
                "w185",
                "w300",
                "w500",
                "original"
              ],
              "poster_sizes": [
                "w92",
                "w154",
                "w185",
                "w342",
                "w500",
                "w780",
                "original"
              ],
              "profile_sizes": [
                "w45",
                "w185",
                "h632",
                "original"
              ],
              "still_sizes": [
                "w92",
                "w185",
                "w300",
                "original"
              ]
            },
            "change_keys": [
              "adult",
              "air_date",
              "also_known_as",
              "alternative_titles",
              "biography",
              "birthday",
              "budget",
              "cast",
              "certifications",
              "character_names",
              "created_by",
              "crew",
              "deathday",
              "episode",
              "episode_number",
              "episode_run_time",
              "freebase_id",
              "freebase_mid",
              "general",
              "genres",
              "guest_stars",
              "homepage",
              "images",
              "imdb_id",
              "languages",
              "name",
              "network",
              "origin_country",
              "original_name",
              "original_title",
              "overview",
              "parts",
              "place_of_birth",
              "plot_keywords",
              "production_code",
              "production_companies",
              "production_countries",
              "releases",
              "revenue",
              "runtime",
              "season",
              "season_number",
              "season_regular",
              "spoken_languages",
              "status",
              "tagline",
              "title",
              "translations",
              "tvdb_id",
              "tvrage_id",
              "type",
              "video",
              "videos"
            ]
        };
    }
    generateAPI(endpoint='', api_key, options=[]) {
        if(!endpoint) { throw { message: 'GenerateAPI: No endpoint path provided for api generation'}};
        if(!api_key) { throw { message: 'GenerateAPI: Requires an api key'}}
        return options.reduce((apiUrl, option) => {
            return `${apiUrl}&${option.key}=${option.value}`;
        }, `${this.API_URL}${endpoint}?api_key=${api_key}`);
    };

    async getPopular(type, options = { page: 1, adult: false }) {
        switch(type) {
            case 'movies':
                return this.getPopularMovies(options);
            break;
            default: 
                throw { message: 'Whoops does not match a valid media type!' };
            break;
        }
    }
    async getPopularMovies(options = { page: 1, adult: false }) {
        const { page, adult } = options;
        const apiRoute = this.generateAPI('movie/popular', this.API_KEY, [
            { key: 'page', value: page }
        ])
        const movies = await axios.get(apiRoute).then(response => adult ? response.data.results : response.data.results.filter(movie => !movie.adult));
        return movies;
    }

    async getTopRated(options = { page: 1, adult: false }) {
        const { page, adult } = options;
        const apiRoute = this.generateAPI('movie/top_rated', this.API_KEY, [
            { key: 'page', value: page }            
        ])
        const movies = await axios.get(apiRoute).then(response => adult ? response.data.results : response.data.results.filter(movie => !movie.adult));
        return movies;
    }

    async init() {
        const apiRoute = this.generateAPI('configuration', this.API_KEY);
        const { data } = await axios.get(apiRoute);
        this.config = data;
        return this;
    }
}

module.exports = TMDB;