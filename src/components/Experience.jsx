import React from 'react'

const Experience = () => {
  return (
    <div>

    
    <section id="experience">
    <p className="section-label reveal">Experience</p>
    <h2 className="section-title reveal reveal-delay-1">Places I've Learned and Shipped Code</h2>

    <div className="exp-list">

      {/* <!-- Cox Automotive --> */}
      <div className="exp-item reveal">
        <div className="exp-meta">
          <div className="exp-company">
            Cox Automotive
            <br/>
            <span style={{fontFamily:"Inter", fontSize:"0.9rem",
                         color:"#8b949e", fontWeight:"400"}}>Dealertrack</span>
          </div>
          <div className="exp-role">Software Developer Intern</div>
          <div className="exp-date">Jan 2024 – Mar 2024 · Draper, UT</div>
        </div>
        <div className="exp-details">
          <p className="exp-desc">
            Embedded on a production dashboard team serving thousands of auto dealerships. Worked
            directly in React + TypeScript on components that real users hit every day.
          </p>
          <ul className="exp-bullets">
            <li><strong>Refactored core dashboard components</strong> in React + TypeScript,
                improving rendering performance across high-traffic user workflows</li>
            <li><strong>Improved data visualization logic</strong>, making key operational metrics
                faster to interpret and reducing cognitive friction for end users</li>
            <li><strong>Automated regression testing</strong> with Selenium (C#/.NET), significantly
                reducing manual QA cycles and increasing test coverage</li>
            <li><strong>Traced API responses and component state</strong> to resolve frontend data
                inconsistencies — the kind of debugging that teaches you how production systems
                actually behave</li>
          </ul>
        </div>
      </div>

      {/* <!-- NetDocuments --> */}
      <div className="exp-item reveal">
        <div className="exp-meta">
          <div className="exp-company">NetDocuments</div>
          <div className="exp-role">Software Engineer Intern</div>
          <div className="exp-date">Oct 2023 – Dec 2023 · Lehi, UT</div>
        </div>
        <div className="exp-details">
          <p className="exp-desc">
            Focused on testing infrastructure and CI/CD pipeline integration — work that doesn't
            always get credit but directly impacts how fast a team can ship with confidence.
          </p>
          <ul className="exp-bullets">
            <li><strong>Expanded automated test coverage</strong> across core product workflows by
                developing and optimizing Selenium test suites</li>
            <li><strong>Integrated tests into Azure DevOps CI pipelines</strong>, accelerating
                feedback loops and reducing regression risk on every deploy</li>
            <li><strong>Introduced consistent unit testing patterns</strong> and improved error
                handling across key components, raising overall application reliability</li>
          </ul>
        </div>
      </div>

      {/* <!-- NICE CXone --> */}
      <div className="exp-item reveal">
        <div className="exp-meta">
          <div className="exp-company">NICE CXone</div>
          <div className="exp-role">Software Engineer Intern</div>
          <div className="exp-date">Mar 2023 – Jun 2023 · Sandy, UT</div>
        </div>
        <div className="exp-details">
          <p className="exp-desc">
            Worked inside a large-scale Angular application — the kind of codebase where
            understanding how pieces connect matters as much as writing new code.
          </p>
          <ul className="exp-bullets">
            <li><strong>Improved page load performance</strong> by refactoring legacy Angular +
                TypeScript code in a large-scale enterprise application</li>
            <li><strong>Modularized legacy code</strong> into reusable, component-driven architecture
                — making the codebase easier to reason about and extend</li>
            <li><strong>Identified and resolved performance bottlenecks</strong> across critical
                user-facing pages, improving responsiveness where it mattered most</li>
          </ul>
        </div>
      </div>

    </div>

    {/* <!-- Education --> */}
    <div className="reveal education-card" 
    style={{marginTop: "2.5rem", padding: "1.5rem",
         background:"#161b22", border: "1px solid rgba(255,255,255,0.08)",
         borderRadius: "10px", display: "flex", alignItems: "center", gap: "1.5rem"}}
         >
      <div style={{flexShrink: "0"}}>
        <div style={{fontFamily:"JetBrains Mono, ui-monospace", fontSize:"0.68rem", letterSpacing:"0.12em",
                    color:"#4da3ff", textTransform:"uppercase", marginBottom:"0.3rem"}}>
          Education
        </div>
        <div style={{fontFamily:"Inter", fontSize:"1.15rem"}}>Neumont University</div>
        <div style={{fontSize:"0.85rem", color:"#8b949e", marginTop:"0.2rem"}}>
          B.S. Web Design &amp; Development · Oct 2020 – May 2024
        </div>
      </div>
      <div className='education-divider' style={{flexShrink:"0", height:"50px", width:"1px", background:"rgba(255,255,255,0.08)"}}></div>
      <div style={{fontSize:"0.9rem", color:"#8b949e", lineHeight:"1.6"}}>
        Neumont's project-heavy curriculum meant graduating with a portfolio of real systems rather
        than toy exercises — and three internships alongside my degree.
      </div>
    </div>
  </section>
  <div className="section-divider"></div>
  </div>
  )
}

export default Experience