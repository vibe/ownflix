import React from 'react';
import WithMovies from '../containers/movies';

const movies = movies => (
    <div className="movies">
        { movies.map(movies => <div>movie</div>) }
    </div>
);

export default props => (
    <div className="TrendingMovies">
        <WithMovies type="trending" component={movies} />
    </div>
)