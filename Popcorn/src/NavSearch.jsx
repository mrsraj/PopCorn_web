
import { useEffect, useState } from "react";
import './App.css';



function NavSearch({ ApisDataFun }) {

    const [SearchData, setSearchData] = useState('');

    const search = SearchData ? SearchData : "Movie";

    async function fetchData() {
        try {
            let res = await fetch(`https://www.omdbapi.com/?s=${search}&apikey=64f1b04f`);
            let data = await res.json();
            console.log("Count API = ", data);
            /** callback function to send data to its parent */
            
            ApisDataFun(data.Search);
        }
        catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [SearchData]);

    /** Assign user input into state variable */
    function handleEvent(e) {
        if (e.key === 'Enter') {
            ApisDataFun([]);
            setSearchData(e.target.value);
        }
    }

    /** Return JSX for UI */
    return (
        <input type="text" placeholder="Movie Search by Name..." className="NavSearch" onKeyDown={handleEvent} />
    );
}

export default NavSearch