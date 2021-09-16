import React from "react";
import { Link } from "react-router-dom";

const Search = (props) => {

    return(
        <div key={Math.random()}>
            <div className='search'>  
                <form className='search-form'>
                    <div className='search-input'>
                        <input type="text" placeholder="Search for a Pin or a Board" value={search} onChange={
                            e => setSearch(e.target.value)
                        }/>
                    </div> 
                    <div className="search-button">
                        <Link to = '/pins'>
                            <button type='submit' className='search-button'>
                                <i className="fas fa-search"></i>
                            </button>
                        </Link>
                    </div>
                </form>
            </div>                
        </div>
    )
}

export default Search;