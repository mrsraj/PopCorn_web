
import { useEffect, useState } from 'react';
import './selected.css'
function SelecteMovieCard({ selectMovie, handleCancel1 }) {

    const [selectMovieData, setSelectMovieData] = useState([]);
    const [loader, setLoader] = useState(true);


    async function fetchData() {
        let res = await fetch(`https://www.omdbapi.com/?i=${selectMovie}&apikey=64f1b04f`);
        let data = await res.json();

        console.log("selectMovie = ", typeof data);
        console.log("selectMovie = ", data);
        setSelectMovieData(data);
        setLoader(false);
    }

    useEffect(() => {
        fetchData();
    }, [])

    function handleCancel() {
        handleCancel1(false);
    }

    useEffect(() => {
        if (!selectMovieData.Title) return;
        document.title = `${selectMovieData.Type} | ${selectMovieData.Title}`;

        return function () {
            document.title = "🍿 POPCORN";
            console.log(`Clean up effect for movie ${selectMovieData.Title}`);
        };

    }, [selectMovieData])

    function LoaderComponent() {
        return <div className='selectLoader'><h2 >Loading...</h2></div>
    }

    return (
        <>
            {loader ? <LoaderComponent /> :
                <div className='SelecteMovieCard'>
                    <div className='selected-movie-poster-div '>
                        <img className='movie-poster' src={selectMovieData.Poster} alt={selectMovieData.Poster} />
                    </div>

                    <div className='selected-movie-details-div'>
                        <button className='cancelbtn' onClick={handleCancel}>X</button>
                        <h2 className='h2'>{selectMovieData.Title}</h2>
                        <div>
                            <p className='D'>{`Actors : ${selectMovieData.Actors}`}</p>
                            <p className='D'>{`Country : ${selectMovieData.Country}`}</p>
                            <p className='D'>{`Awards : ${selectMovieData.Awards}`}</p>
                            <p className='D'>{`BoxOffice : ${selectMovieData.BoxOffice}`}</p>
                            <p className='D'>{`Director : ${selectMovieData.Director}`}</p>
                            <p className='D'>{`Writer : ${selectMovieData.Writer}`}</p>
                            <p className='D'>{`Language : ${selectMovieData.Language}`}</p>
                            <p className='D'>{`Year : ${selectMovieData.Year}`}</p>
                            <p className='D'>{`Released : ${selectMovieData.Released}`}</p>
                            <p className='D'>{`Type : ${selectMovieData.Type}`}</p>
                            <p className='D'>{`imdbRating  :⭐ ${selectMovieData.imdbRating} / 10`}</p>
                            <p className='D'>{`Runtime : ${selectMovieData.Runtime}`}</p>
                            <p className='D'>{`imdbVotes : ${selectMovieData.imdbVotes}`}</p>
                        </div>

                    </div>

                </div>
            }
        </>
    );
}

export default SelecteMovieCard;