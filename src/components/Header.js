import React from 'react'
import './Header.css';

function Header() {
    return (
        <div className="header">
            <h1 className="header__text">Where in the world?</h1>
            <button className="header__mode"><ion-icon className="header__mode--icon" name="moon-outline"></ion-icon> Dark Mode</button>
        </div>
    )
}

export default Header
