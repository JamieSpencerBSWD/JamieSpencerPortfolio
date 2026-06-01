import React from 'react'
import { hero } from '../data/heroContent'

const Hero = () => {
  return (
    <div>
      <section id="hero">
      <div className="hero-bg-circle">
      </div>
      <p className="hero-eyebrow">{hero.title}</p>
      <h1 className="hero-name">{hero.firstName}<br/><em>{hero.lastName}</em></h1>
      <p className="hero-tagline">
        <strong>{hero.tagline}</strong><p>{hero.description}</p>
      </p>
      <div className="hero-ctas">
        <a href="#projects" className="btn btn-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
          View Projects
        </a>
        <a href="mailto:jamie.spencer.dev@gmail.com" className="btn btn-outline">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,12 2,6"></polyline>
          </svg>
          Contact Me
        </a>
        <a href="https://www.linkedin.com/in/dspencerdjs/" rel="noreferrer" target="_blank" className="btn btn-outline">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
          LinkedIn
        </a>
      </div>
      <div className="hero-scroll">
        <span className="scroll-line"></span>
        Scroll to explore
      </div>
    </section>
    <div className="section-divider"></div>
  </div>
  )
}

export default Hero