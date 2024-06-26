
import './Allcss.css'
import React from 'react';

function MovieCard({ movieList }) {

    console.log("movieList = ", movieList);

    if (movieList.length == 0 || movieList =="null") {
        return <Loader />
    }

    //console.log("Movie dataForCard = ", dataForCard.length);

    function Loader() {
        return <div className='movielistloader'><h2>Loading...</h2></div>
    }

    function HandleCardDetails(ID) {
        alert(ID);
    }

    return (
        <div className="MovieCard">
            {movieList.map((movie, index) => (
                <div key={index} className='MovieCard-items' onClick={() => { HandleCardDetails(movie.imdbID) }}>

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