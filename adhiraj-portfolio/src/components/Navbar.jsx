// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const navLinkStyle = {
  color: '#ffffff',
  textDecoration: 'none',
  opacity: 0.8,
  transition: 'opacity 0.3s',
};

function Navbar() {
  return (
    <nav
      style={{
        width: '100%',
        padding: '1.2rem 3rem',
        position: 'absolute',
        top: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        fontFamily: 'Space Grotesk, sans-serif',
        fontSize: '0.95rem',
        fontWeight: 300,
        letterSpacing: '0.1rem',
        textTransform: 'uppercase',
        zIndex: 10,
        backgroundColor: 'transparent',
        color: '#ffffff',
      }}
    >
      <Link to="/" style={navLinkStyle}>Home</Link>
      <Link to="/projects" style={navLinkStyle}>Projects</Link>
      <Link to="#about" style={navLinkStyle}>About Me</Link>
      <Link to="#tech" style={navLinkStyle}>Tech Stack</Link>
    </nav>
  );
}

export default Navbar;
