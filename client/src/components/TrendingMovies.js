import React from 'react';
import Movies from '../containers/movies';


export default props => (
    <div className="TrendingMovies">
        <Movies type="trending">
           {
                (movies, pending) => (
                    movies.map((movie, i) => (
                    <div key={i}>
                    {pending ? 'pending' : 'not pending'} movie
                    </div>
                ))
                )
           }
        </Movies>
    </div>
)