import React from 'react'

const About = () => {
  return (
    <div>
      <section id="about" style={{paddingTop: "3rem"}}>
      <div style={{gridColumn: "1 / -1", marginBottom: "1rem"}} className="reveal">
        <p className="section-label">About</p>
      </div>

      <div className="about-text reveal reveal-delay-1">
        <h2 className="section-title" style={{marginBottom: "1.5rem"}}>
          I like figuring out<br/>
          <em style={{fontFamily:"Inter", fontStyle:"italic"}}>how things work</em>
        </h2>
        <p>I graduated from Neumont University with a BS in Web Design and Development and spent most of my time there building projects, experimenting with new technologies, and looking for opportunities to get real-world experience.</p>
        <p>That led to three software engineering internships, each with a very different focus. At <strong>Cox Automotive</strong>, I worked in a production React and TypeScript dashboard used by dealerships across the country. At <strong>NetDocuments</strong>, I spent most of my time building automated tests and integrating them into CI pipelines. At <strong> NICE CXone</strong>, I worked inside a large Angular application and helped improve performance by breaking apart older code into smaller, more maintainable pieces.</p>
        <p>The common thread between all of those experiences was learning how to contribute to codebases I didn’t write. Reading unfamiliar code, tracing bugs, understanding how systems connect, and gradually building confidence in environments that were much larger than anything I had worked on before.</p>
        <p>These days I'm focused on improving as an engineer, building projects that challenge me, and finding a team where I can continue learning while making meaningful contributions.</p>
      </div>

      <div className="about-stats reveal reveal-delay-2">
        <div className="stat-card">
          <div className="stat-num">3</div>
          <div className="stat-label">Production internships</div>
        </div>
        <div className="stat-card">
          <div className="stat-num">4+</div>
          <div className="stat-label">Frameworks shipped</div>
        </div>
        <div className="stat-card">
          <div className="stat-num">Full</div>
          <div className="stat-label">Stack coverage</div>
        </div>
        <div className="stat-card">
          <div className="stat-num">∞</div>
          <div className="stat-label">Still learning</div>
        </div>
      </div>
    </section>

    <div className="section-divider"></div>
  </div>
  )
}

export default About