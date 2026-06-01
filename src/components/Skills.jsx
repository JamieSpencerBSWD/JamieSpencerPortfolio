import React from 'react'

const Skills = () => {
  return (
    <div>
    <section id="skills">
      <p className="section-label reveal">Skills</p>
      <h2 className="section-title reveal reveal-delay-1">What I Work With</h2>

      <div className="skills-grid">
        <div className="skill-group reveal reveal-delay-1">
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

        <div className="skill-group reveal reveal-delay-2">
          <div className="skill-group-label">Backend</div>
          <div className="skill-tags">
            <span className="skill-tag primary">Node.js</span>
            <span className="skill-tag primary">Express</span>
            <span className="skill-tag">ASP.NET</span>
            <span className="skill-tag">REST APIs</span>
            <span className="skill-tag">JWT Auth</span>
            <span className="skill-tag">C#</span>
            <span className="skill-tag">PHP</span>
          </div>
        </div>

        <div className="skill-group reveal reveal-delay-3">
          <div className="skill-group-label">Databases</div>
          <div className="skill-tags">
            <span className="skill-tag primary">PostgreSQL</span>
            <span className="skill-tag primary">MongoDB</span>
            <span className="skill-tag">SQL</span>
            <span className="skill-tag">Relational Modeling</span>
          </div>
        </div>

        <div className="skill-group reveal reveal-delay-4">
          <div className="skill-group-label">Tools &amp; Workflow</div>
          <div className="skill-tags">
            <span className="skill-tag primary">Git</span>
            <span className="skill-tag">Azure DevOps</span>
            <span className="skill-tag">Docker</span>
            <span className="skill-tag">Selenium</span>
            <span className="skill-tag">CI/CD Pipelines</span>
            <span className="skill-tag">VS Code</span>
            <span className="skill-tag">IntelliJ</span>
          </div>
        </div>

        <div className="skill-group reveal reveal-delay-1">
          <div className="skill-group-label">Other Languages</div>
          <div className="skill-tags">
            <span className="skill-tag">Python</span>
            <span className="skill-tag">Java</span>
            <span className="skill-tag">SQL</span>
          </div>
        </div>

        <div className="skill-group reveal reveal-delay-2">
          <div className="skill-group-label">Concepts</div>
          <div className="skill-tags">
            <span className="skill-tag">MVC Architecture</span>
            <span className="skill-tag">Component Design</span>
            <span className="skill-tag">Accessibility (a11y)</span>
            <span className="skill-tag">Performance Optimization</span>
            <span className="skill-tag">Agile</span>
          </div>
        </div>
      </div>
    </section>
    <div className="section-divider"></div>
    </div>
  )
}

export default Skills