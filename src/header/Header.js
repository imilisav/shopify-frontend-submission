// Imports
import React from 'react';
import Search from './Search';
import Mode from './Mode';

function Header(props) {
    return (
        <header className="Header-container">
            <img 
                src={props.theme === 'light' ? "/logo.png" : "/logo_dark.png"} 
                alt="The Shoppies" 
                height="70"/>
            <Search queryCallback={props.queryCallback}/>
            <Mode themeCallback={props.themeCallback}/>
        </header>
    )
}

export default Header;