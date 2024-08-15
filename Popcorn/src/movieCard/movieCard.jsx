
import './Allcss.css'
import React from 'react';

function MovieCard({ movieList, setPagination, pagination, setSelectMovie }) {

    console.log("movieList = ", movieList);

    if (movieList.length == 0 || (movieList.data.length == 0 && movieList.message == "OK")) {
        return <Loader />
    }

    //console.log("Movie dataForCard = ", dataForCard.length);

    function Loader() {
        return <div className='movielistloader'><h2>Loading...</h2></div>
    }

    function HandleSelectMovie(ID) {
        setSelectMovie(ID);
    }

    if (movieList.message === 'Error') {
        return (
            <div className="MovieCard">
                <h1>{movieList.data}</h1>
            </div>
        )
    }

    function incrementFun() {
        if (pagination >= 100) {
            return;
        }
        else {
            setPagination(pagination + 1);
        }
    }

    function decrementFun() {
        if (pagination <= 1) {
            return;
        }
        else {
            setPagination(pagination - 1);
        }
    }

    return (
        // Movie Card 
        <div className="MovieCard" >
            {movieList.data.map((movie, index) => (
                <div key={index} className='MovieCard-items' onClick={() => { HandleSelectMovie(movie.imdbID) }}>
                    {/* Movie Image */}
                    <div >
                        <img className='MovieCard-poster' src={movie.Poster} alt={`NO,${movie.Title} Poster`} loading="lazy" />
                    </div>
                    {/* Movie Details */}
                    <div className='MovieCard-sort-details'>
                        <div>
                            <h3 className='title'> {movie.Title}</h3>
                            <p >Year: {movie.Year}</p>
                            <p >Type: {movie.Type}</p>
                        </div>
                    </div>
                </div>
            ))}

            <div className='pagination'>

                <p className='dec' onClick={decrementFun}> <b>-</b> </p>

                <p>Page No: {pagination}</p>

                <p className='inc' onClick={incrementFun}><b>+</b></p>

            </div>
        </div>
    );
}

export default MovieCard;