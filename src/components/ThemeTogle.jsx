// src/components/ThemeToggle.jsx
import React, { useContext } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import ThemeContext from '../context/ThemeContext';
import '../global.css';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className={`theme-toggle ${theme === 'dark' ? 'theme-toggle--dark' : ''}`}
      data-theme={theme}
    >
      <span className="theme-toggle__icon">
        {theme === 'light' ? <FiMoon /> : <FiSun />}
      </span>
      <span className="theme-toggle__text">
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </span>
    </button>
  );
}
