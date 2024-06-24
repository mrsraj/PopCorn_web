
import "./NavAll.css"
function SearchResult({data}) {
    return (
        <div>
            Found <b>{data ? data:0}</b> results
        </div>
    );
}

export default SearchResult;