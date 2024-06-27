import { useState } from 'react';
import './App.css'
import NavContainer from './NavBar/NavContainer.jsx';
import MovieCard from './movieCard/movieCard.jsx'


function App() {

  const [movieList, setmovieList] = useState([]);
  const[pagination, setPagination] = useState(1);
  
  function updateMovieList(info) {
    console.log("new info in app file: " , info);
    setmovieList(info);
  }

  return (
    <>
      <NavContainer updateAppMovieList={updateMovieList} pagination = {pagination} />
      <MovieCard movieList={movieList}  setPagination = {setPagination} pagination = {pagination}/>
    </>
  )
}

export default App
