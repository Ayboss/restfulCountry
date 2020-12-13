import React, {useContext,useState, useEffect} from 'react'
import axios from 'axios';
import Country from './Country';
import {RegionContext} from './../context/RegionContext';

function CountriesGrid() {
    const {value, setValue} = useContext(RegionContext);
    const [countries, setCountries] = useState([]);
    
    useEffect(()=>{
        //get all countries
        if(value === 'Filter by Region'){
            fetchAllCountries();
        }else{
            fetchCountriesByRegion(value);
        }
    },[value]);
    const fetchAllCountries = async ()=>{
        try{
            const response = await axios.get('https://restcountries.eu/rest/v2/all?fields=population;region;capital;flag;name');
            console.log(response);
            setCountries(response.data);
        }catch(err){
            console.log(err.response);
        }
    }
    const fetchCountriesByRegion = async (region)=>{
        try{
            const response = await axios.get(`https://restcountries.eu/rest/v2/region/${region}?fields=population;region;capital;flag;name`);
            console.log(response);
            setCountries(response.data);
        }catch(err){
            console.log(err.response);
        }
    }
    return (
        <div className="country-grid">
            {
                countries.map(({name,flag,region,population,capital})=>{
                    return <Country key={name} name={name} flag={flag} capital={capital} region={region} population={population} />
                })
            }
        </div>
    )
}

export default CountriesGrid
