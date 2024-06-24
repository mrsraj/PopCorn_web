import './App.css'
import NavContainer from './NavBar/NavContainer'
import Api_Fetch from './API_Fetch.jsx'
import { useState } from 'react';

function App() {
  const [data1, setData1] = useState(null);
  const [search, setSearch] = useState();

  function SearchData(SearchData) {
    setSearch(SearchData);
  }

  function SearchCount(data) {
    setData1(data.length);
  }

  return (
    <>
      <NavContainer data={data1} SearchFun={SearchData}/>
      <Api_Fetch SearchCount={SearchCount} SearchData={search} />
    </>
  )
}

export default App
