// src/utils/github.js

/**
 * Fetch public repositories from GitHub for user “rhunter27”
 * Returns an array of repo objects.
 */
export async function fetchRepos() {
  const response = await fetch('https://api.github.com/users/rhunter27/repos');
  if (!response.ok) {
    throw new Error('GitHub API request failed');
  }
  return await response.json();
}

/**
 * Return a static list of “local” projects for the portfolio.
 * You can adjust this to fetch from a JSON, database, etc.
 */
export async function getProjects() {
  return [
    {
      id: 1,
      name: 'Project 1',
      description: 'Description for project 1',
      image: '', // if you have an image URL, put it here
      technologies: ['React', 'CSS'],
      githubLink: 'https://github.com/yourusername/project1',
      liveLink: 'https://yourusername.github.io/project1',
    },
    {
      id: 2,
      name: 'Project 2',
      description: 'Description for project 2',
      image: '',
      technologies: ['Node.js', 'Express'],
      githubLink: 'https://github.com/yourusername/project2',
      liveLink: 'https://yourusername.github.io/project2',
    },
  ];
}
