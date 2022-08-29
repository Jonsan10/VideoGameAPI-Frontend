import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"

const SearchBar = (props) => {

    const [searchBar, setSearchBar] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/?search=${searchBar}`);
    }
    

    return ( 
        <div>
            <input className='searchBar' type={'text'} placeholder="searching"
            value={searchBar} onChange={(e) =>setSearchBar(e.target.value)}/>
            <button className='searchButton'onClick={handleSubmit}>Search</button>
        </div>
     );
}
 
export default SearchBar;