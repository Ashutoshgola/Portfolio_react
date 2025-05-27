import React from 'react';
import { useTheme } from '../../Context/ThemeContext';
import './Header.css';

const Header = () => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <header className="header">
      <h2>My Portfolio</h2>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </header>
  );
};

export default Header;
