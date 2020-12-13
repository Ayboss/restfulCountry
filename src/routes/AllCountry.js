import React from 'react';
import InputsComponents from './../components/InputsComponents';
import CountriesGrid from './../components/CountriesGrid';

//fetch all countries and display them
function AllCountry() {
    
    return (
        <>
            <InputsComponents />
            <CountriesGrid />
        </>
    )
}

export default AllCountry