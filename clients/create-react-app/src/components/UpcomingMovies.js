import React from 'react';
import WithMovies from '../containers/movies';
import Movie from '../components/movie';
import movie from '../components/movie';

// const movies = movies => (
//     <div className="movies">
//         { movies.map((movie, i) => <Movie movie={movie} key={i}/>) }
//     </div>
// );

const movies = movies => {
    console.log(movies);
    const featuredID = Math.floor(Math.random()*movies.length);
    const featured = movies[featuredID];
    console.log(movies);
    movies = movies.filter(movies => movie === featured);

    return (
        <div className="component">
            <header>Upcoming Movies</header>
            <div className="featured">
                <span>Featured: { featured ? featured.title : null }</span>
            </div>
            { movies.map((movie, i) => <Movie movie={movie} key={i}/>) }
        </div>
    )
}


export default props => (
    <div className="UpcomingMovies">
        <WithMovies type="upcoming" component={movies} />
    </div>
)