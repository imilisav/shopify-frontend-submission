// Imports
import React, { useState } from 'react';

// Style Imports
import './Mode.css';

function Mode({ themeCallback }) {

    const getThemeFromStorage = () => {
        var theme = localStorage.getItem('theme');

        // Null check, for the first time someone lands on the page.
        return (theme === null || theme === 'light') ? true : false;
    }
    
    // Hook for toggling between light/dark theme, light being default.
    const [isLightToggled, setLightToggle] = useState(getThemeFromStorage());
    const toggleMode = () => {
        setLightToggle(!isLightToggled);
        themeCallback();
    }

    return (
        <div className="container">
            <label className="switch" for="checkbox">
            <input 
                type="checkbox" 
                id="checkbox"
                checked={!isLightToggled}
                onClick={toggleMode}/>
            <div className="slider round"></div>
            </label>
            <p>Switch to {isLightToggled ? "Dark Mode" : "Light Mode"}</p>
        </div>
    );
}

export default Mode;