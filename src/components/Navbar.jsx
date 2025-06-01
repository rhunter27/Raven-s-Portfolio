// src/components/Navbar.jsx
import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import '../global.css';

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={`navbar ${theme === 'dark' ? 'navbar--dark' : ''}`}>
      <div className="navbar__logo-container">
        <a href="/" className="navbar__logo">
          <span className="navbar__logo-highlight">Portfolio</span>
        </a>
      </div>

      <div className="navbar__links">
        <a href="#work" className="navbar__link">
          <span className="navbar__link-number">01.</span> Projects
        </a>
        <a href="#about" className="navbar__link">
          <span className="navbar__link-number">02.</span> About
        </a>
        <a href="#contact" className="navbar__link">
          <span className="navbar__link-number">03.</span> Contact
        </a>
      </div>

      <div className="navbar__actions">
        <button
          onClick={toggleTheme}
          aria-label={`Toggle ${theme === 'light' ? 'dark' : 'light'} mode`}
          className="navbar__theme-button"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        <button
          onClick={() => (window.location.href = '#contact')}
          className="navbar__cta-button"
        >
          Let&apos;s Talk
        </button>
      </div>
    </nav>
  );
}
