// Imports
import React, { useState } from 'react';

// Style Imports
import './Mode.css';

function Mode({ themeCallback }) {
    
    // Hook for toggling between light/dark theme, light being default.
    const [isLightToggle, setLightToggle] = useState((localStorage.getItem('theme') === 'light') ? true : false);
    const toggleMode = () => {
        setLightToggle(!isLightToggle);
        themeCallback();
    }

    return (
        <div className="container">
            <label className="switch" for="checkbox">
            <input 
                type="checkbox" 
                id="checkbox"
                checked={!isLightToggle}
                onClick={toggleMode}/>
            <div className="slider round"></div>
            </label>
            <p>Switch to {isLightToggle ? "Dark Mode" : "Light Mode"}</p>
        </div>
    );
}

export default Mode;