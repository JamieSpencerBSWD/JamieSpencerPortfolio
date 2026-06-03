import React, { useState, useEffect } from 'react'

const GithubProjects = () => {
  const [repos, setRepos] = useState([]);
  //const [repoLanguages, setRepoLanguages] = useState([])
  
  // const fetchLanguages = (languagesURL) => {
  //   fetch(languagesURL)
  //     .then((res) => res.json())
  //     .then((data) => {
  //         setRepoLanguages(prev => [...prev, data])
  //     });
  //   console.log("Repo Languages",repoLanguages)
  // }
  
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
        
      })
      // .then(repos.slice(0, 7).forEach(repo => {
      //       fetchLanguages(repo.languages_url);
      //     }))
          ;

      //Each repo, has this: https://api.github.com/repos/JamieSpencerBSWD/{repository}/languages
      // which shows the technologies and languages used. For each repo, grab that url, fetch the languages and map through them
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
            <div className="skill-group-label">Technologies Used</div>
            <div className="skill-tags">
              {
                // repoLanguages.slice(0,6).map((repository) => (
                //   repository.map((language) => (
                //     <span className="skill-tag">{language}</span>
                //   ))
                // ))
                // Map through each object in repolanguages, and display each technology in the skill-tag span element
              }              
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