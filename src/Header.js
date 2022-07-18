import React from 'react';
import './Header.css';
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className='header'>
        
        <Link to='/'>
        <img className="header__icon" src="https://1000logos.net/wp-content/uploads/2017/08/Airbnb-logo.jpg" alt="" />
        </Link>

        <div className='header__center'>
            <input type="text" name="" value=""/>
                <SearchIcon />
        </div>

        <div className='header__right'>
            <p>Become a host</p>
            <LanguageIcon />
            <ExpandMoreIcon />
            <Avatar />
        </div>

    </div>
  )
}

export default Header