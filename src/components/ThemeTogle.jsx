import { FiSun, FiMoon } from 'react-icons/fi';
import React from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { useTheme } from '../context/ThemeContext'; // Correct import for ThemeContext
import '../styles/themeToggle.css'; // Ensure this path is correct

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className="theme-toggle"
      data-theme={theme}
    >
      <span className="theme-toggle-icon">
        {theme === 'light' ? <FiMoon className="moon-icon" /> : <FiSun className="sun-icon" />}
      </span>
      <span className="theme-toggle-text">
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </span>
    </button>
  );
};

export default ThemeToggle;