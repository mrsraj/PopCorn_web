
import { useEffect, useState } from "react";
import MovieCard from "./movieCard/movieCard";

function Api_Fetch({ SearchCount }) {

    const [restData, setRestData] = useState(null);
    const search = "movie";

    async function fetchData() {
        try {
            let res = await fetch(`https://www.omdbapi.com/?s=${search}&apikey=64f1b04f`);
            let data = await res.json();
            console.log("Count API = ", data);
            setRestData(data.Search);
            SearchCount(data.Search);
        }
        catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <MovieCard data={restData} />
    );
}

export default Api_Fetch;