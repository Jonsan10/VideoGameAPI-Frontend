import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"

const NavBar = (props) => {

    const [searchBar, setSearchBar] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/?search=${searchBar}`);
    }
    

    return ( 
        <div></div>
     );
}
 
export default NavBar;