// Imports
import React from 'react';

// Style Imports
import "./Search.css"

function Search({ queryCallback }) {
    return(
        <input
            className="Search-bar"
            type="text" 
            placeholder="Search movie titles..."
            onChange={event => queryCallback(event.target.value)}/>
    );
}

export default Search;