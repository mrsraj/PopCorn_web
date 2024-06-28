import { useState } from 'react';
import './App.css'
// import NavContainer from './NavBar/NavContainer.jsx';
// import MovieCard from './movieCard/movieCard.jsx'
import SelecteMovieCard from './SelecteMovie/SelectedMovieCard'


function App() {

  // const [movieList, setmovieList] = useState([]);
  // const[pagination, setPagination] = useState(1);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // function updateMovieList(info) {
  //   console.log("new info in app file: " , info);
  //   setmovieList(info);
  // }

  return (
    <>
      <SelecteMovieCard />
      {/* <NavContainer updateAppMovieList={updateMovieList} pagination = {pagination} />
      <MovieCard movieList={movieList}  setPagination = {setPagination} pagination = {pagination}/> */}
    </>
  )
}

export default App
