// src/pages/About.jsx
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import '../global.css';

export default function About() {
  const { theme } = useTheme();

  return (
    <div className="about-page" data-theme={theme}>
      <h1 className="about-page__heading">About Me</h1>
      <p className="about-page__subheading">Frontend Developer | UI/UX Enthusiast</p>

      <div className="about-page__graphics">
        <div className="about-page__graphic-box about-page__graphic-box--creative">
          <span>Creative.</span>
        </div>
        <div className="about-page__graphic-box about-page__graphic-box--number">
          <span>20</span>
        </div>
        <div className="about-page__graphic-box about-page__graphic-box--about">
          <span>ABOUT</span>
          <span>US</span>
        </div>
        <div className="about-page__graphic-box about-page__graphic-box--number">
          <span>26</span>
        </div>
      </div>

      <div className="about-page__content">
        <div className="about-page__story">
          <h2 className="about-page__section-heading">Our Story</h2>
          <div className="about-page__image-container">
            <img src="./team.jpg" alt="Our team" className="about-page__team-photo" />
            <div className="about-page__image-overlay" />
          </div>
          <p className="about-page__text">
            Raven Hunter is a versatile professional with 13+ years in sales and customer service, now expanding into
            technical fields through completion of Rice University's 6-month coding bootcamp. Combines extensive retail
            expertise (jewelry, fashion, healthcare) with newly acquired programming skills to bridge business and
            technology. Proven track record in driving sales (achieved 10% increase at Zales) while developing technical
            competencies in full-stack development, data analysis, and system troubleshooting.
          </p>
        </div>

        <div className="about-page__values">
          <h3 className="about-page__values-heading">Our Values</h3>
          <ul className="about-page__values-list">
            <li className="about-page__value-item">
              <span className="about-page__value-icon">✓</span>
              <span className="about-page__value-text">Customer satisfaction</span>
            </li>
            <li className="about-page__value-item">
              <span className="about-page__value-icon">✓</span>
              <span className="about-page__value-text">Innovation</span>
            </li>
            <li className="about-page__value-item">
              <span className="about-page__value-icon">✓</span>
              <span className="about-page__value-text">Integrity</span>
            </li>
            <li className="about-page__value-item">
              <span className="about-page__value-icon">✓</span>
              <span className="about-page__value-text">Creativity</span>
            </li>
          </ul>

          <button className="about-page__learn-more-btn">LEARN MORE</button>
        </div>
      </div>
    </div>
  );
}
