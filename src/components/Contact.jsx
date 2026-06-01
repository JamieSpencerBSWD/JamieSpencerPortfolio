import React from 'react'

const Contact = () => {
  return (
    <div>
    <section id="contact">
    <p className="section-label reveal" style={{textAlign: "center"}}>Contact</p>
    <h2 className="section-title reveal reveal-delay-1" style={{textAlign: "center", marginBottom: "1rem"}}>
      <em style={{fontFamily:"Inter", fontStyle:"italic", color:"#4da3ff"}}>
        Let's Build Something
      </em>
    </h2>
    <p className="contact-intro reveal reveal-delay-2">
      I'm currently looking for full-stack and backend-focused software engineering opportunities.

If you're working on something interesting and think I'd be a good fit, feel free to reach out. I'd love to hear about what you're building.
    </p>

    <div className="contact-links reveal reveal-delay-3">
      <a href="mailto:jamie.spencer.dev@gmail.com" className="contact-item">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z">
          </path>
          <polyline points="22,6 12,12 2,6"></polyline>
        </svg>
        jamie.spencer.dev@gmail.com
      </a>
      <a href="https://github.com/JamieSpencerBSWD" target="_blank" rel="noreferrer"
         className="contact-item">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61
                   c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77
                   5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0
                   C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78
                   c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
        github.com/JamieSpencerBSWD
      </a>
      <a href="https://www.linkedin.com/in/dspencerdjs/" target="_blank" rel="noreferrer"
         className="contact-item">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z">
          </path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
        linkedin.com/in/dspencerdjs
      </a>
    </div>

    <a href="mailto:jamie.spencer.dev@gmail.com" className="btn btn-primary reveal reveal-delay-4"
       style={{margin: "0 auto", display: "inline-flex"}}>
      Say hello →
    </a>
  </section>
  <div className="section-divider"></div>
  </div>
  )
}

export default Contact