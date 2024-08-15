import { useState } from 'react';
import './App.css'
import NavContainer from './NavBar/NavContainer.jsx';
import MovieCard from './movieCard/movieCard.jsx'
import SelecteMovieCard from './SelecteMovie/SelectedMovieCard'


function App() {

  const [movieList, setmovieList] = useState([]);
  const [pagination, setPagination] = useState(1);
  const [selectMovie, setSelectMovie] = useState(null);

  function updateMovieList(info) {
    console.log("new info in app file: ", info);
    setmovieList(info);
  }

  function HideSelectMovieCard(da) {
    setSelectMovie(da);
    console.log('Dq', da);
  }

  return (
    <>
      {selectMovie ?
        (<SelecteMovieCard selectMovie={selectMovie} handleCancel1={HideSelectMovieCard} />)
        :
        (<>
          <NavContainer updateAppMovieList={updateMovieList} pagination={pagination} />
          <MovieCard movieList={movieList} setPagination={setPagination}
            pagination={pagination} setSelectMovie={setSelectMovie} />
        </>)}
    </>
  )
}

export default App
