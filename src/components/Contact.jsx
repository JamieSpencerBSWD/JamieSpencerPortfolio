import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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
        <MailIcon/>
        jamie.spencer.dev@gmail.com
      </a>
      <a href="https://github.com/JamieSpencerBSWD" target="_blank" rel="noreferrer"
         className="contact-item">
        <GitHubIcon/>
        github.com/JamieSpencerBSWD
      </a>
      <a href="https://www.linkedin.com/in/dspencerdjs/" target="_blank" rel="noreferrer"
         className="contact-item">
        <LinkedInIcon/>
        linkedin.com/in/dspencerdjs
      </a>
    </div>

    <a href="mailto:jamie.spencer.dev@gmail.com" className="btn btn-primary"
       style={{margin: "0 auto", display: "inline-flex"}}>
      Say hello <ArrowForwardIcon/>
    </a>
  </section>
  <div className="section-divider"></div>
  </div>
  )
}

export default Contact