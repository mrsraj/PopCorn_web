
import "./NavAll.css";
import NavSearch from "../NavSearch";
import ResultCount from "./SearchResultCount";
import { useState } from "react";

function NavContainer({ updateAppMovieList }) {
    const [apisData, setApisData] = useState(0);

    function ApisDataFun(data) {
        console.log("ApisData = ", data);
        
        setApisData(data.length);
        console.log("Count API == ", data);
        /**Invoke callback function of app.jsx to update movielist state variable*/
        updateAppMovieList(data);
    }

    return (
        <div className="NavContainer">
            <h2 className="logo">🍿PopCorn</h2>
            <NavSearch ApisDataFun={ApisDataFun} />
            <ResultCount ApisDataCount={apisData} />
        </div>
    );
}

export default NavContainer;