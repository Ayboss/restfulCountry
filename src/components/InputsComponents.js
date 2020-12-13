import React from 'react';
import Dropdown from './Dropdown';
import './InputsComponents.css';

function InputsComponents() {
    return (
        <div className="inputsComponents">
            <form className="searchForm">
                <button className="searchForm__search"><ion-icon name="search-outline"></ion-icon></button>
                <input className="searchForm__input" type="text" placeholder="Search for a country" /> 
            </form>
            <Dropdown />
        </div>
    )
}

export default InputsComponents
