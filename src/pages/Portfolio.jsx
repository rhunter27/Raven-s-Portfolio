// src/pages/Portfolio/Portfolio.jsx
import { useState, useEffect } from 'react';
import Project from '../../components/Project/Project'; // Updated import path
import { getProjects, fetchGitHubRepos } from '../../api/github';
import './Portfolio.css'; // Portfolio-specific styles

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [githubRepos, setGithubRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        
        // Load both data sources in parallel
        const [localProjects, repos] = await Promise.all([
          getProjects(),
          fetchGitHubRepos('yourUsername')
        ]);
        
        setProjects(localProjects);
        setGithubRepos(repos.filter(repo => !repo.private)); // Exclude private repos
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
    return <div className="loading-spinner">Loading projects...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <section className="portfolio-container">
      <h2 className="portfolio-title">My Projects</h2>
      
      <div className="portfolio-grid">
        {/* Local projects */}
        {projects.map((project) => (
          <Project 
            key={`local-${project.id || project.title}`}
            {...project}
            source="local"
          />
        ))}
        
        {/* GitHub repos */}
        {githubRepos.map((repo) => (
          <Project 
            key={`gh-${repo.id}`}
            title={repo.name}
            description={repo.description || 'No description available'}
            technologies={repo.topics || []}
            githubLink={repo.html_url}
            homepage={repo.homepage}
            source="github"
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;