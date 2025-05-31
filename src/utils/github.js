// Frontend API client - stays in src/api/
export const fetchRepos = async () => {
    const response = await fetch('https://api.github.com/users/rhunter27/repos');
      return await response.json();
  };
  
  export const getProjects = async () => {
    // Example implementation
    return [
      { id: 1, name: 'Project 1', description: 'Description for project 1' },
      { id: 2, name: 'Project 2', description: 'Description for project 2' },
    ];
  };