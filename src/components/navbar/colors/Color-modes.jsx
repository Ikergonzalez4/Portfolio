import React, { useState, useEffect } from 'react';

const ColorModes = () => {
    const [isDarkMode, setIsDarkMode] = useState(true); // Establece el estado inicial a true

    const toggleColorMode = () => {
        setIsDarkMode(!isDarkMode); // Cambia el estado de isDarkMode
    };

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
        } else {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    return (
        <button className="toggle-button" data-dark={isDarkMode} data-logo={isDarkMode ? '🌑' : '☀️'} onClick={toggleColorMode}>
        </button>
    );
};

export default ColorModes;