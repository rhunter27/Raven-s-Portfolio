// src/pages/About.jsx
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import '../styles/About.css';

const About = () => {
  const { theme } = useTheme();

  return (
    <div className="about-container">
      <h1 className="about-heading">About Me</h1>
      <p className="about-subheading">Frontend Developer | UI/UX Enthusiast</p>
      
      <div className="graphic-elements">
        <div className="graphic-box graphic-creative">
          <span>Creative.</span>
        </div>
        <div className="graphic-box graphic-number">
          <span>20</span>
        </div>
        <div className="graphic-box graphic-about">
          <span>ABOUT</span>
          <span>US</span>
        </div>
        <div className="graphic-box graphic-number">
          <span>26</span>
        </div>
      </div>

      <div className="about-content">
        <div className="about-story">
          <h2 className="section-heading">Our Story</h2>
          <div className="image-container">
            <img src="./team.jpg" alt="Our team" className="team-photo" />
            <div className="image-overlay"></div>
          </div>
          <p className="about-text">
            Raven Hunter is a versatile professional with 13+ years in sales and customer service, now expanding into
            technical fields through completion of Rice University's 6-month coding bootcamp. Combines extensive retail
            expertise (jewelry, fashion, healthcare) with newly acquired programming skills to bridge business and
            technology. Proven track record in driving sales (achieved 10% increase at Zales) while developing technical
            competencies in full-stack development, data analysis, and system troubleshooting.
          </p>
        </div>

        <div className="about-values">
          <h3 className="values-heading">Our Values</h3>
          <ul className="values-list">
            <li className="value-item">
              <span className="value-icon">✓</span>
              <span className="value-text">Customer satisfaction</span>
            </li>
            <li className="value-item">
              <span className="value-icon">✓</span>
              <span className="value-text">Innovation</span>
            </li>
            <li className="value-item">
              <span className="value-icon">✓</span>
              <span className="value-text">Integrity</span>
            </li>
            <li className="value-item">
              <span className="value-icon">✓</span>
              <span className="value-text">Creativity</span>
            </li>
          </ul>

          <button className="learn-more-btn">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;