import React from 'react';
import { Link } from 'react-router-dom';
import TrendingMovies from '../components/TrendingMovies';

export default () => (
    <div className="home">
        <nav>
            <Link to="/discover">Discover</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/tv-shows">TV Shows</Link>
        </nav>
        <TrendingMovies />
    </div>
)