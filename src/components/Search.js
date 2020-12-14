import React, {useState,useContext} from 'react'
import {SearchContext} from './../context/SearchContext';

function Search() {
    const  {setText} = useContext(SearchContext);
    const [value,setValue] = useState()
    const handleSearch = (e)=>{
        e.preventDefault();
        setText(value);
    }
    return (
        <form className="searchForm" onSubmit={handleSearch}>
                <button className="searchForm__search"><ion-icon name="search-outline"></ion-icon></button>
                <input className="searchForm__input" value={value}
                 onChange={e=>setValue(e.target.value)}   
                    type="text" 
                    placeholder="Search for a country" 
                /> 
        </form>
    )
}

export default Search
