import React, { useState, useEffect } from 'react'

const GithubProjects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/JamieSpencerBSWD/repos")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data
          .filter((repo) => !repo.fork)
          .sort(
            (a, b) =>
              new Date(b.updated_at) - new Date(a.updated_at)
          );

        setRepos(filtered);
      });
  }, []);

  return (
    <section>
      <h2>Recent Projects</h2>

      <div className="projects-grid">
        {repos.slice(0, 6).map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className="project-card"
          >
            <h3>{repo.name}</h3>

            <p>
              {repo.description || "No description provided."}
            </p>

            <div>
              <span>{repo.language}</span>
              <span>⭐ {repo.stargazers_count}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default GithubProjects;