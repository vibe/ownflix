import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export const fetchMovies = async (type) => {
    const response = await axios.get(BASE_URL+'/movies');
    console.log('test', response);
    return {
        type: 'FETCH_MOVIES'
    }
}