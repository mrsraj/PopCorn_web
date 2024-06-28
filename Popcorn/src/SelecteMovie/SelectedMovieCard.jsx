
import './selected.css'
function SelecteMovieCard() {


    return (
        <div className='SelecteMovieCard'>
            <div className='selected-movie-poster-div '>
                <img className='movie-poster' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHjkA6bd6_XBS1oGflvK0keYEF3lTtOXERwg&s" alt="img" />
            </div>

            <div className='selected-movie-details-div'>
                <h2 className='h2'>Movie Name</h2>
            </div>
        </div>
    );
}

export default SelecteMovieCard;