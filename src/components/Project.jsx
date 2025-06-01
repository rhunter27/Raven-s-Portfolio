// src/components/Project.jsx
import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../global.css';

export function Project({
  title,
  description,
  image,
  technologies = [],
  githubLink,
  liveLink,
  borderColor = 'var(--accent-primary)',
}) {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      style={{ '--border-color': borderColor }}
    >
      <div className="project-card__image-container">
        <img src={image} alt={title} className="project-card__image" loading="lazy" />
        <div className="project-card__links">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} on GitHub`}
              className="project-card__link"
            >
              <FaGithub />
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live ${title} demo`}
              className="project-card__link"
            >
              <FaExternalLinkAlt />
            </a>
          )}
        </div>
      </div>

      <div className="project-card__content">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>

        {technologies.length > 0 && (
          <div className="project-card__technologies">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="project-card__technology-tag"
                style={{ '--tag-color': borderColor }}
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
