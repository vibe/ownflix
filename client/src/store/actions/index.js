import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export const fetchMovies = async (type, page) => {
    const response = await axios.get(BASE_URL+'/movies/'+type);
    return {
        type: 'FETCH_MOVIES',
        payload: {
            type,
            page,
            movies: response.data,
        }
    }
}