import React from 'react';
import RegionProvider from '../context/RegionContext';
import SearchProvider from '../context/SearchContext';
import InputsComponents from './../components/InputsComponents';
import CountriesGrid from './../components/CountriesGrid';

//fetch all countries and display them
function AllCountry() {
    
    return (
        <RegionProvider>
            <SearchProvider>
                <InputsComponents />
                <CountriesGrid />
            </SearchProvider>
        </RegionProvider>
    )
}

export default AllCountry