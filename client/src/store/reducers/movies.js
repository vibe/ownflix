const initialState = {
    popular: [],
    trending: [],
    upcoming: [],
}
const MoviesReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_MOVIES':
            const { type, page, movies} = action.payload;
            console.log('fetch: ', type, page, movies, state);
            return { ...state, [type]: movies };
        default:
            return state;
    }
}

export default MoviesReducer;