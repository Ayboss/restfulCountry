import React, {useContext,useState, useEffect, useRef} from 'react'
import axios from 'axios';
import Country from './Country';
import {RegionContext} from './../context/RegionContext';
import {SearchContext} from './../context/SearchContext';

function CountriesGrid() {
    const isInitialMount = useRef(true);
    const {value} = useContext(RegionContext);
    const {text} = useContext(SearchContext);
    const [countries, setCountries] = useState([]);
    
    useEffect(()=>{
        //get all countries
        fetchAllCountries();
    },[]);
    useEffect(()=>{
        if (isInitialMount.current) {
            isInitialMount.current = false;
         } else {
            fetchCountriesByRegion(value);
         }
    },[value]);
    useEffect(()=>{
        if (isInitialMount.current) {
            isInitialMount.current = false;
         } else {
            fetchCountriesBySearch(text);
         }
    },[text]);

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
    const fetchCountriesBySearch = async (name)=>{
        try{
            const response = await axios.get(`https://restcountries.eu/rest/v2/name/${name}?fields=population;region;capital;flag;name`);
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
