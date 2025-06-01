// src/components/Layout.jsx
import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import Navbar from './Navbar';
import Footer from './Footer';
import '../global.css';

export default function Layout({ children }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`layout layout--${theme}`} data-theme={theme}>
      {/* Decorative background element */}
      <div className="layout__accent-bg" />

      <Navbar />

      <div className="layout__content">
        {/* Left sidebar */}
        <aside className="layout__sidebar">
          <div className="layout__sidebar-tag">Creative.</div>
          <div className="layout__sidebar-palette">31 Best Color Combinations</div>
          <div className="layout__sidebar-badge">
            <span className="layout__sidebar-badge-text">GRAPHIC</span>
            <span className="layout__sidebar-badge-text">DESIGNER</span>
          </div>
        </aside>

        {/* Main content area */}
        <main className="layout__main">{children}</main>
      </div>

      <Footer />
    </div>
  );
}
