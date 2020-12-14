import React, {useContext} from 'react';
import {DarkContext} from './../context/DarkContext';
import {Link} from 'react-router-dom';
import './Country.css';

function Country({name,flag,population,capital,region}) {
    const  {dark} = useContext(DarkContext);
    return (
        <Link className={`country ${dark && 'dark'}`} to={`/${name}`}>
            <img src={flag} className="country__flag" alt={name}/>
            <div className="country__info">
                <h2 className="country__name">{name}</h2>
                <p className="country__population">Population: <span>{population}</span></p>
                <p className="country__region">Region: <span>{region}</span></p>
                <p className="country__capital">Capital: <span>{capital}</span></p>
            </div>
        </Link>
    )
}

export default Country
