// src/pages/Contact.jsx
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import '../global.css';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  const { theme } = useTheme();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/rhunter27',
      icon: <FaGithub />,
      color: 'var(--accent-primary)',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      icon: <FaLinkedin />,
      color: 'var(--accent-secondary)',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/yourusername',
      icon: <FaTwitter />,
      color: 'var(--accent-tertiary)',
    },
    {
      name: 'Email',
      url: 'mailto:ravenhunter207@gmail.com',
      icon: <FaEnvelope />,
      color: 'var(--accent-quaternary)',
    },
  ];

  return (
    <div className="contact-page" data-theme={theme}>
      <h1 className="contact-page__heading">Contact Me</h1>
      <ul className="contact-page__social-list">
        {socialLinks.map((link, index) => (
          <li key={index} className="contact-page__social-item">
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-page__social-link"
              style={{ color: link.color }}
            >
              <span className="contact-page__social-icon">{link.icon}</span>
              <span className="contact-page__social-text">{link.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
