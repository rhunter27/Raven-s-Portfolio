// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

export default function App() {
  return (
    <BrowserRouter>
      {/* ===== HEADER (nav bar) ===== */}
      <Header />

      {/* ===== MAIN ROUTES ===== */}
      <main>
        <Routes>
          {/* Redirect “/” to “/projects” (Portfolio) */}
          <Route path="/" element={<Navigate to="/projects" replace />} />

          {/* “/projects” loads Portfolio.jsx */}
          <Route path="/projects" element={<Portfolio />} />

          {/* “/about” loads About.jsx */}
          <Route path="/about" element={<About />} />

          {/* “/contact” loads Contact.jsx */}
          <Route path="/contact" element={<Contact />} />

          {/* “/resume” loads Resume.jsx */}
          <Route path="/resume" element={<Resume />} />

          {/* Any unknown URL → redirect back to “/projects” */}
          <Route path="*" element={<Navigate to="/projects" replace />} />
        </Routes>
      </main>

      {/* ===== FOOTER ===== */}
      <Footer />
    </BrowserRouter>
  );
}
