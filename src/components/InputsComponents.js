import React, {useContext} from 'react';
import {DarkContext} from './../context/DarkContext';
import Dropdown from './Dropdown';
import './InputsComponents.css';

function InputsComponents() {
    const  {dark} = useContext(DarkContext);
    return (
        <div className={`inputsComponents ${dark && 'dark'}`}>
            <form className="searchForm">
                <button className="searchForm__search"><ion-icon name="search-outline"></ion-icon></button>
                <input className="searchForm__input" type="text" placeholder="Search for a country" /> 
            </form>
            <Dropdown />
        </div>
    )
}

export default InputsComponents
