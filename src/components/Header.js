import React, {useContext} from 'react'
import {DarkContext} from './../context/DarkContext';
import './Header.css';

function Header() {
    const  {dark, setDark} = useContext(DarkContext);
    return (
        <div className={`header ${dark && 'dark'}`}>
            <h1 className="header__text">Where in the world?</h1>
            <button className="header__mode" onClick={()=>setDark(!dark)} ><ion-icon className="header__mode--icon" name="moon-outline"></ion-icon> Dark Mode</button>
        </div>
    )
}

export default Header
