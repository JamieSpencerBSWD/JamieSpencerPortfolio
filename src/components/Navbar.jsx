import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav id="navbar">
        <a href="#hero" className="nav-logo" onClick={() => setIsOpen(false)}>JS<span>.</span></a>
        <button className="nav-toggle" id="navToggle" aria-label="Toggle navigation" onClick={() => {setIsOpen(!isOpen)}}>
          {!isOpen? 
          <MenuIcon/> : 
          <ClearIcon/>
          }</button>
        <ul className={`nav-links ${isOpen ? "open" : ""}`} id="navLinks" >
            <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
            <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
            <li><a href="#recent-projects" onClick={() => setIsOpen(false)}>Recent</a></li>
            <li><a href="#experience" onClick={() => setIsOpen(false)}>Experience</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
    </nav>
  )
}

export default Navbar