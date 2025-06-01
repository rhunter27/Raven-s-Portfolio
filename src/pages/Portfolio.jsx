// src/pages/Portfolio.jsx
import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Project } from '../components/Project';      // ← use named import
import { getProjects, fetchRepos } from '../utils/github';
import '../global.css';

export default function Portfolio() {
  const { theme } = useTheme();
  const [projects, setProjects] = useState([]);
  const [githubRepos, setGithubRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);

        const [localProjects, repos] = await Promise.all([
          getProjects(),
          fetchRepos(),
        ]);

        setProjects(localProjects);
        setGithubRepos(repos.filter((repo) => !repo.private));
      } catch (err) {
        console.error('Failed to load projects:', err);
        setError('Failed to load projects. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="portfolio-page__loading" data-theme={theme}>
        Loading projects...
      </div>
    );
  }

  if (error) {
    return (
      <div className="portfolio-page__error" data-theme={theme}>
        {error}
      </div>
    );
  }

  return (
    <section className="portfolio-page" data-theme={theme}>
      <h2 className="portfolio-page__title">My Projects</h2>

      <div className="portfolio-page__grid">
        {projects.map((project) => (
          <Project
            key={`local-${project.id || project.name}`}
            title={project.name}
            description={project.description}
            image={project.image || ''}
            technologies={project.technologies || []}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
            borderColor="var(--accent-primary)"
          />
        ))}

        {githubRepos.map((repo) => (
          <Project
            key={`gh-${repo.id}`}
            title={repo.name}
            description={repo.description || 'No description available'}
            image={repo.owner.avatar_url}
            technologies={repo.topics || []}
            githubLink={repo.html_url}
            liveLink={repo.homepage}
            borderColor="var(--accent-secondary)"
          />
        ))}
      </div>
    </section>
  );
}
