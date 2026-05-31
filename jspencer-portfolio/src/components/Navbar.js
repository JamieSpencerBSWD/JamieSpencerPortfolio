import React from 'react'

const Navbar = () => {
  return (
    <nav id="navbar">
        <a href="#hero" className="nav-logo">JS<span>.</span></a>
        <button className="nav-toggle" id="navToggle" aria-label="Toggle navigation">☰</button>
        <ul className="nav-links" id="navLinks">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
  )
}

export default Navbar