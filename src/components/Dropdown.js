import React, {useState, useContext} from 'react';
import {RegionContext} from './../context/RegionContext';

function Dropdown() {
    const  {value, setValue} = useContext(RegionContext);
    const [active, setActive] = useState(false);

    const handleDropdown = ()=>{
        setActive(!active);
    }
    const handleSetValue = (val)=>{
        setValue(val);
        handleDropdown();
    }
    return (
        <div className="dropdown">
            <button className="dropdown__select" onClick={handleDropdown}>{value} <ion-icon name="chevron-down-outline"></ion-icon></button>
            <ul className={`dropdown__list ${active && 'dropdown__list--active'}`}>
                <li className="dropdown__item"><button className="dropdown__option" onClick={()=>handleSetValue('Africa')}>Africa</button></li>
                <li className="dropdown__item"><button className="dropdown__option" onClick={()=>handleSetValue('Americas')}>Americas</button></li>
                <li className="dropdown__item"><button className="dropdown__option" onClick={()=>handleSetValue('Asia')}>Asia</button></li>
                <li className="dropdown__item"><button className="dropdown__option" onClick={()=>handleSetValue('Europe')}>Europe</button></li>
                <li className="dropdown__item"><button className="dropdown__option" onClick={()=>handleSetValue('Oceania')}>Oceania</button></li>
            </ul>
        </div>
    )
}

export default Dropdown

// dropdown__list--active