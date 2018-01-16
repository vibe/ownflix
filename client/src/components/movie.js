import React from 'react';

export default ({ movie }) => {
    const { 
        vote_count,
        title,
        backdrop_path,
        poster_path
    } = movie;

    return (
        <div className="movie">
            <img src={poster_path} />
            <span>{title}</span>
        </div>
    )
}