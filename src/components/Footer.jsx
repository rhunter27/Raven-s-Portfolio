// components/Footer/Footer.tsx
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import React from 'react';
import '../styles/global.css'; // Correct path for global.css

/**
 * @typedef {Object} SocialLink
 * @property {string} name - The name of the social platform.
 * @property {string} url - The URL to the social platform.
 * @property {JSX.Element} icon - The icon representing the social platform.
 * @property {string} color - The color associated with the social platform.
 */

export default function Footer() {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: <FaGithub />,
      color: '#B4A2F6', // Soft purple
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      icon: <FaLinkedin />,
      color: '#ECAAFB', // Light pink
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/yourusername',
      icon: <FaTwitter />,
      color: '#FCE54D', // Pastel yellow
    },
    {
      name: 'Email',
      url: 'mailto:you@example.com',
      icon: <FaEnvelope />,
      color: '#F9FBC3', // Cream
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              style={{ color: link.color }}
              className="social-link"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}