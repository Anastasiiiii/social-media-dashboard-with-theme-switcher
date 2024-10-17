import React from "react";
import { useEffect, useState } from "react";
import useLocalStorage from "../useLocalStorage"
import "../styles/Formulas.css";
import "../styles/Header.css";

const Header = () => {
    const [darkMode, setDarkMode] = useLocalStorage(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }
    const darkModeName = "Dark mode";
    const lightModeName = "Light mode";

    useEffect(() => {
        if (darkMode) {
            document.documentElement.setAttribute("data-theme", "dark");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
        }
    }, [darkMode]);

    return (
        <div className='header-container'>
            <div className='header-title-container'>
                <h1>Social Media Dashboard</h1>
                <p>Total Followers: 23,004</p>
            </div>
            <div className='change-mode-button-container'>
                <p>{darkMode ? lightModeName : darkModeName}</p>
                <input
                    id="mode-toggle"
                    type="checkbox"
                    onClick={toggleDarkMode}
                />
                <label htmlFor="mode-toggle"></label>
            </div>
        </div>
    )
}


export default Header;