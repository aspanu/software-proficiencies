import React, { useEffect, useState } from 'react';
import './ThemeToggleButton.css'; // Import the relevant CSS to style the button

const ThemeToggleButton: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    useEffect(() => {
        // Check the current theme from local storage and set it
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
            setIsDarkMode(true);
        }
    }, []);

    const toggleTheme = () => {
        document.body.classList.toggle('dark-mode');
        const newTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        setIsDarkMode(newTheme === 'dark');
    };

    return (
        <button id="toggle-mode" className="toggle-mode-button" onClick={toggleTheme}>
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
    );
};

export default ThemeToggleButton;