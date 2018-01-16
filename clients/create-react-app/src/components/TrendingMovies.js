import React from 'react';
import WithMovies from '../containers/movies';
import Movie from '../components/movie';

const movies = movies => (
    <div className="movies">
        { movies.map((movie, i) => <Movie movie={movie} key={i}/>) }
    </div>
);

export default props => (
    <div className="TrendingMovies">
        <WithMovies type="trending" component={movies} />
    </div>
)