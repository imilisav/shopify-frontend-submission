// Imports
import React from 'react';
import Search from './Search';
import Mode from './Mode';
import logo from './logo.png';
import logo_dark from './logo_dark.png';

function Header(props) {
    const { theme, queryCallback, themeCallback } = props;

    return (
        <header className="Header-container">
            <img 
                src={theme === 'light' ? logo : logo_dark} 
                alt="The Shoppies" 
                height="70"/>
            <Search queryCallback={queryCallback}/>
            <Mode themeCallback={themeCallback}/>
        </header>
    )
}

export default Header;