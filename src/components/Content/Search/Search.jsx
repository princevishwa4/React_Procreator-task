import "./Search.css";
import SearchIcon from "../../../assets/search.png"

const Search = () => {
    return(
        <form>
            <input type="text" placeholder="Search" name="search" />
            <span><img src={SearchIcon} alt="Search Icon" /></span>
        </form>
    );
}

export default Search;