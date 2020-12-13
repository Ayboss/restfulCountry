import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';
import '../countryroute.css';

function CountryRoute() {
    const {name} = useParams();
    const [country, setCountry] = useState({})
    useEffect(()=>{
        //fetch a country
        fetchCountry()
    },[]);
    const fetchCountry = async ()=>{
        try{
            const response = await axios.get(`https://restcountries.eu/rest/v2/name/${name}?fullText=true&fields=population;region;capital;flag;name;subregion;borders;currencies;languages`);
            console.log(response.data);
            setCountry(response.data[0]);
        }catch(err){
            console.log(err.response);
        }
    
    }

    return (
        <div>
            <Link to="/" className="backbutton"><ion-icon name="arrow-back-outline"></ion-icon>Back</Link>
            <div className="countrySingle">
                <img className="countrySingle__image" src={country.flag} alt={country.name}/>
                <div className="countrySingle__details">
                    <h2>{country.name}</h2>
                    <div className="countrySingle__info">
                        <ul>
                            <li>Native Name: <span>Belgie</span></li>
                            <li>Population: <span>{country.population}</span></li>
                            <li>Region: <span>{country.region}</span></li>
                            <li>Sub Region: <span>{country.subregion}</span></li>
                            <li>Capital: <span>{country.capital}</span></li>
                        </ul>
                        <ul>
                            <li>Top Level Domain: <span>be</span> </li>
                            <li>Currencies: <span>{country.currencies?.map(item=><span>{item.name}</span>)}</span> </li>
                            <li>Languages: <span>{country.languages?.map(item=><span>{item.name}</span>)}</span> </li>
                        </ul>
                    </div>
                    <div className="countrySingle__border">
                        <p>Border Countries</p>
                        <ul>
                            {country.border?.map(item=><span>{item.name}</span>)}
                            <li>Germany</li>
                            <li>Netherlands</li>
                        </ul>
                    </div>
                </div>    
            </div>
        </div>
    )
}

export default CountryRoute
