// src/components/Header/Header.jsx
import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import '../styles/header.css'; // Correct path for header.css
import React from 'react';

const Header = () => {
  return (
    <header className="header bg-light shadow-sm py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <NavLink to="/" className="text-decoration-none">
          <h1 className="logo m-0 text-dark fs-4 fw-bold">
            <i className="bi bi-code-slash me-2"></i> {/* Bootstrap Icon */}
            Raven's Portfolio
          </h1>
        </NavLink>
        
        <nav className="nav d-none d-md-block">
          <ul className="nav-list list-unstyled d-flex gap-4 mb-0">
            <li>
              <NavLink 
                to="/" 
                end 
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'active fw-bold' : 'text-muted'}`
                }
              >
                <i className="bi bi-person me-1"></i> About
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/portfolio" 
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'active fw-bold' : 'text-muted'}`
                }
              >
                <i className="bi bi-collection me-1"></i> Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'active fw-bold' : 'text-muted'}`
                }
              >
                <i className="bi bi-envelope me-1"></i> Contact
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/resume" 
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'active fw-bold' : 'text-muted'}`
                }
              >
                <i className="bi bi-file-earmark-text me-1"></i> Resume
              </NavLink>
            </li>
          </ul>
        </nav>
        
        <div className="header-actions">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;