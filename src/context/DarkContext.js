import React, {useState, createContext} from 'react'

export const DarkContext = createContext();
function DarkProvider({children}) {
    const [dark, setDark] = useState(false)
    return (
        <DarkContext.Provider value={{dark,setDark}}>
            {children}
        </DarkContext.Provider>
    )
}

export default DarkProvider