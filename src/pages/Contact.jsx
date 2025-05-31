import React from 'react';
import '../styles/Contact.css';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/rhunter27',
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
      url: 'ravenhunter207@gmail.com',
      icon: <FaEnvelope />,
      color: '#F9FBC3', // Cream
    },
  ];

  return (
    <div className="contact-container">
      <h1 className="contact-heading">Contact Me</h1>
      <ul className="social-links">
        {socialLinks.map((link, index) => (
          <li key={index} className="social-link-item">
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              style={{ color: link.color }}
            >
              {link.icon}
              <span className="social-link-name">{link.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contact;