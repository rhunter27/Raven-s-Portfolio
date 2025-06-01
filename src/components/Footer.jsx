// src/components/Footer.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import '../global.css';

export default function Footer() {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: <FaGithub />,
      color: 'var(--accent-primary)', // Soft purple
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      icon: <FaLinkedin />,
      color: 'var(--accent-secondary)', // Light pink
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/yourusername',
      icon: <FaTwitter />,
      color: 'var(--accent-tertiary)', // Pastel yellow
    },
    {
      name: 'Email',
      url: 'mailto:you@example.com',
      icon: <FaEnvelope />,
      color: 'var(--accent-quaternary)', // Cream
    },
  ];

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__social-links">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="footer__social-link"
              style={{ color: link.color }}
            >
              {link.icon}
            </a>
          ))}
        </div>
        <p className="footer__copyright">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
