
import { useEffect, useState } from "react";
import './App.css';



function NavSearch({ ApisDataFun }) {

    const [SearchData, setSearchData] = useState('');
    const [warning, setWarning] = useState(false)


    const search = SearchData ? SearchData : "Movie";
    var dataResponse;
    async function fetchData() {
        try {
            let res = await fetch(`https://www.omdbapi.com/?s=${search}&apikey=64f1b04f`);
            let data = await res.json();
            console.log("Count API = ", data);
            dataResponse = data.Response;
            /** callback function to send data to its parent */

            if (data.Response != "False") {
                ApisDataFun(data.Search);
            }
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

            let s = (e.target.value).trim();

            if (s.length < 3) {
                alert("At least three character:");
                return;
            }
            else if (dataResponse == "False" && SearchData != s) {
                console.log("Gandu:");
                ApisDataFun([]);
                setSearchData(s);
            }

            else {

                alert("Movie not found:");
                return;
            }

        }
    }

    /** Return JSX for UI */
    return (
        <input type="text" placeholder="Movie Search by Name..." className="NavSearch" onKeyDown={handleEvent} />
    );
}

export default NavSearch;