import React from 'react'

const Projects = () => {
  return (
    <div>
    <section id="projects">
    <p className="section-label reveal">Projects</p>
    <h2 className="section-title reveal reveal-delay-1">Things I've Built</h2>

    <div className="projects-grid">

      {/* <!-- ShadeBase (featured) --> */}
      <div className="project-card featured reveal">
        <div className="project-meta">
          <p className="project-num">01 — Flagship Project</p>
          <h3 className="project-name">ShadeBase</h3>
          <p className="project-summary">
            ShadeBase is a full-stack color palette and accessibility platform that grew far beyond its original scope.
          </p>
          <p>What started as a simple palette management project evolved into a tool for contrast checking, colorblindness simulation, blend mode previews, and palette sharing. Along the way it became one of the projects that taught me the most about designing larger applications.</p>
          <div className="project-tags">
            <span className="project-tag">React</span>
            <span className="project-tag">Node.js</span>
            <span className="project-tag">Express</span>
            <span className="project-tag">MongoDB</span>
            <span className="project-tag">REST API</span>
            <span className="project-tag">JWT Auth</span>
          </div>
          <div className="project-links">
            <a href="https://github.com/JamieSpencerBSWD/ShadeBase"
               target="_blank" rel="noreferrer" className="project-link">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61
                         c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77
                         5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0
                         C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78
                         c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              GitHub
            </a>
          </div>
        </div>

        <div>
          <p className="project-detail-label">Architecture</p>
          <p className="project-detail">
            MERN stack with a clear separation of concerns: Express REST API handles all persistence
            and user auth (JWT), while color analysis runs client-side in React for real-time UI
            responsiveness. Palette documents store structured color arrays with computed metadata —
            keeping the DB clean and the client fast.
          </p>
          <p className="project-detail-label">Technical Focus</p>
          <p className="project-detail">
            One of the biggest challenges was performing accessibility and color analysis calculations in real time without making the interface feel sluggish. Features like WCAG contrast validation and colorblindness simulation required a surprising amount of math and experimentation to get right. The project also pushed me to think more carefully about API design, database structure, and keeping responsibilities separated between the frontend and backend.
          </p>
          <p className="project-detail-label">What I Learned</p>
          <p className="project-detail">
            ShadeBase was the first project where I stopped thinking purely about features and started thinking about architecture. It taught me a lot about project organization, scalability, accessibility, and how software changes as requirements grow over time.
            The palette schema went through several iterations before landing on a structure that made
            querying both efficient and expressive. 115 commits deep — this one taught me iteration.
          </p>
        </div>
      </div>

      {/* <!-- PocketDex --> */}
      <div className="project-card reveal reveal-delay-1">
        <div className="project-meta">
          <p className="project-num">02</p>
          <h3 className="project-name">PocketDex</h3>
          <p className="project-summary">
            PocketDex is a React application built around the PokéAPI that allows users to browse, search, and explore Pokémon data through a clean interface. The project focuses on routing, asynchronous data fetching, and creating an experience that feels responsive despite relying entirely on external API data.
          </p>
          <div className="project-tags">
            <span className="project-tag">React</span>
            <span className="project-tag">JavaScript</span>
            <span className="project-tag">REST API</span>
            <span className="project-tag">Dynamic Routing</span>
          </div>
        </div>
        <p className="project-detail-label">Engineering Focus</p>
        <p className="project-detail">
          Most of the work involved managing API requests, loading states, and navigation between views while keeping the application simple. It ended up being one of the projects that helped solidify my understanding of React fundamentals and data flow.
        </p>
        <div className="project-links">
          <a href="https://github.com/JamieSpencerBSWD/PocketDex"
             target="_blank" rel="noreferrer" className="project-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61
                       c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77
                       5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0
                       C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78
                       c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            GitHub
          </a>
        </div>
      </div>

      {/* <!-- Job Application Tracker --> */}
      <div className="project-card reveal reveal-delay-2">
        <div className="project-meta">
          <p className="project-num">03 — In Progress</p>
          <h3 className="project-name">Job Application Tracker</h3>
          <p className="project-summary">
            The Job Application Tracker is a full-stack application designed to help organize and analyze the job search process. Instead of treating applications as rows in a spreadsheet, the platform stores structured data that can be searched, filtered, tagged, and eventually analyzed to identify patterns and trends.
          </p>
          <div className="project-tags">
            <span className="project-tag">Node.js</span>
            <span className="project-tag">Express</span>
            <span className="project-tag">PostgreSQL</span>
            <span className="project-tag">REST API</span>
          </div>
        </div>
        <p className="project-detail-label">Engineering Focus</p>
        <p className="project-detail">
          A large portion of the project revolves around designing a PostgreSQL schema that can support future features without becoming difficult to maintain. Applications, technologies, sources, statuses, and tags are modeled as structured relationships rather than simple text fields.
        </p>
        <p className="project-detail-label">What I'm Learning</p>
        <p className="project-detail">
          This project has become a great exercise in backend design and data modeling. It forces me to think beyond individual pages and focus on how information is organized, queried, and extended over time.
        </p>
        <div className="project-links">
          <a href="https://github.com/JamieSpencerBSWD/JobTracker"
             target="_blank" rel="noreferrer" className="project-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61
                       c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77
                       5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0
                       C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78
                       c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            GitHub
          </a>
        </div>
      </div>

    </div>
  </section>
  <div className="section-divider"></div>
  </div>
  )
}

export default Projects