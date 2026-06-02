import React from 'react'
import { hero } from '../data/heroContent'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import CodeIcon from '@mui/icons-material/Code';

const Hero = () => {
  return (
    <div>
      <section id="hero">

      <div className="hero-bg-circle"></div>
      
      <p className="hero-eyebrow">{hero.title}</p>

      <h1 className="hero-name">{hero.firstName}<br/><em>{hero.lastName}</em></h1>

      <p className="hero-tagline">
        <strong>{hero.tagline}</strong><p>{hero.description}</p>
      </p>

      <div className="hero-ctas">
        <a href="#projects" className="btn btn-primary">
          <CodeIcon/>
          View Projects
        </a>

        <a href="mailto:jamie.spencer.dev@gmail.com" className="btn btn-outline">
          <MailIcon/>
          Contact Me
        </a>

        <a href="https://www.linkedin.com/in/dspencerdjs/" rel="noreferrer" target="_blank" className="btn btn-outline">
          <LinkedInIcon/>
          LinkedIn
        </a>
      </div>

      {/* <div className="hero-scroll">
        <span className="scroll-line"></span>
        Scroll to explore
      </div> */}

    </section>

    <div className="section-divider"></div>

  </div>
  )
}

export default Hero