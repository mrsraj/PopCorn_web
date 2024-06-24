
import './Allcss.css'
import React from 'react';

function MovieCard({ data }) {

    if (!Array.isArray(data)) {
        return (
            <>
                <div>Loading...</div>
                <div>{typeof data}</div>
            </>
        );
    }
    else if (data.length === 0) {
        return <div>No movies available</div>;
    }

    return (
        <div className="MovieCard">
            {data.map((movie, index) => (
                <div key={index} className='MovieCard-items'>

                    <div >
                        <img className='MovieCard-poster' src={movie.Poster} alt={`${movie.Title} Poster`} />
                    </div>

                    <div className='MovieCard-sort-details'>
                        <div>
                            <h3 className='title'> {movie.Title}</h3>
                            <p >Year: {movie.Year}</p>
                            <p >Type: {movie.Type}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MovieCard;