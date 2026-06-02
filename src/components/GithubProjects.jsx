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
    <div>
    <section id='recent-projects'>
      <p className="section-label reveal">Recent Repositories</p>
      <h2 className="section-title reveal reveal-delay-1">What I've Been Working On Lately</h2>

      <div className="skills-grid">
        {repos.slice(0, 6).map((repo) => (
          <div className="skill-group reveal reveal-delay-1" key={repo.id}>
            <p>{repo.name} - {repo.description} - {repo.language} - {repo.stargazers_count}</p>
            <div className="skill-group-label">Frontend</div>
            <div className="skill-tags">
              <span className="skill-tag primary">React</span>
              <span className="skill-tag primary">TypeScript</span>
              <span className="skill-tag primary">JavaScript</span>
              <span className="skill-tag">Angular</span>
              <span className="skill-tag">Vue</span>
              <span className="skill-tag">HTML</span>
              <span className="skill-tag">CSS</span>
            </div>
          </div>
        ))}
      </div>
    </section>
    <div className="section-divider"></div>
    </div>
  );
}

export default GithubProjects;