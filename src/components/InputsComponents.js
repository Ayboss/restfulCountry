import React, {useContext} from 'react';
import {DarkContext} from './../context/DarkContext';
import Dropdown from './Dropdown';
import Search from './Search';
import './InputsComponents.css';

function InputsComponents() {
    const  {dark} = useContext(DarkContext);
    return (
        <div className={`inputsComponents ${dark && 'dark'}`}>
            <Search />
            <Dropdown />
        </div>
    )
}

export default InputsComponents
