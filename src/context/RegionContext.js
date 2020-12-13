import React, {createContext, useState} from 'react';

export const RegionContext = createContext();

function RegionProvider({children}) {
    
    const [value, setValue] = useState('Filter by Region')

    return (
        <RegionContext.Provider value={{value, setValue}}>
            {children}
        </RegionContext.Provider>
    )
}

export default RegionProvider;
