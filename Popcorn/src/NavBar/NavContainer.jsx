
import "./NavAll.css";
import NavSearch from "./NavSearch";
import SearchResult from "./SearchResult";
function NavContainer({ data,SearchFun }) {

    return (
        <div className="NavContainer">
            <h2 className="logo"><span>🍿PopCorn</span></h2>
            <NavSearch />
            <SearchResult data={data} />
        </div>
    );
}

export default NavContainer;