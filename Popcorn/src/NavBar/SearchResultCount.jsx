
import "./NavAll.css"
function ResultCount({ApisDataCount}) {
    console.log("ApisDataCount", ApisDataCount);
    
    
    return (
        <div>
            Found <b>{ApisDataCount ? ApisDataCount : 0}</b> results
        </div>
    );
}

export default ResultCount;