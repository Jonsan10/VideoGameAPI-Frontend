import React, { useState } from 'react';


const SearchBar = (props) => {

    const [searchBar, setSearchBar] = useState('');
    

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    

    return ( 
        <div>
            <input className='searchBar' type={'text'} placeholder="search"
            value={searchBar} onChange={(e) =>setSearchBar(e.target.value)}/>
            <button className='searchButton'onClick={handleSubmit}>Search</button>
        </div>
     );
}
 
export default SearchBar;