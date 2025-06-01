// src/components/Header.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../global.css'; // still load your global CSS

export default function Header() {
  // Assign active class when route matches
  const linkClass = ({ isActive }) =>
    isActive ? 'header__link header__link--active' : 'header__link';

  return (
    <header className="header">
      <div className="header__inner container">
        {/* LOGO / SITE TITLE */}
        <div className="header__logo-link">
          <h1 className="header__logo-text">Portfolio</h1>
        </div>

        {/* NAV LINKS (visible ≥768px) */}
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <NavLink to="/projects" className={linkClass}>
                <span className="header__nav-icon">01.</span> Projects
              </NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink to="/about" className={linkClass}>
                <span className="header__nav-icon">02.</span> About
              </NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink to="/contact" className={linkClass}>
                <span className="header__nav-icon">03.</span> Contact
              </NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink to="/resume" className={linkClass}>
                <span className="header__nav-icon">04.</span> Resume
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
