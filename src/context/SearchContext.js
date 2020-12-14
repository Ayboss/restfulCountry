import React, {createContext, useState} from 'react';

export const SearchContext = createContext();

function SearchProvider({children}) {
    
    const [text, setText] = useState('')

    return (
        <SearchContext.Provider value={{text, setText}}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchProvider;
