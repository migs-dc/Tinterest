import React from "react";
import { Link } from "react-router-dom";
// import pin_index from "../pin/pins_index"

const Search = (props) => {

    return(
        <div className="search-bar">
            <input placeholder="Search" type="text" />
            <button><i class="fas fa-search"></i></button>
        </div>
    )
}

export default Search;