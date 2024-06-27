
import { useEffect } from "react";
import './App.css';



function NavSearch({ ApisDataFun, pagination }) {


    let search = "Movie";
    var Page_no = pagination;
    console.log("pagination = ", pagination);

    async function fetchData() {
        try {
            let res = await fetch(`https://www.omdbapi.com/?s=${search}&page=${Page_no}&apikey=64f1b04f`);
            let data = await res.json();
            console.log("Count API = ", data);

            /** callback function to send data to its parent */

            if (data.Response != "False") {
                let response = {
                    "message": 'OK',
                    'data': data.Search
                }
                ApisDataFun(response);
            } else {
                let response = {
                    "message": 'Error',
                    'data': data.Error
                }
                ApisDataFun(response);
            }

        }
        catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [pagination]);

    /** Assign user input into state variable */
    function handleEvent(e) {
        let s = (e.target.value);
        if (e.key === 'Enter') {

            s = s.trim();
            if (s.length == 0) {
                return;
            }
            else if (s.length < 3) {
                alert("At least three character:");
                return;
            }

            let response = {
                "message": 'OK',
                'data': []
            }
            search = s;
            ApisDataFun(response);
            fetchData()

        } else if (s.length == 0) {
            if (search.length == 0) {
                return
            }
            let response = {
                "message": 'OK',
                'data': []
            }
            search = 'movie';
            ApisDataFun(response);
            fetchData()
        }
    }

    function saveCurrentData(e) {
        search = e.target.value
    }

    /** Return JSX for UI */
    return (
        <input type="text" placeholder="Movie Search by Name..." className="NavSearch" onKeyUp={handleEvent} onKeyDown={saveCurrentData} />
    );
}

export default NavSearch;