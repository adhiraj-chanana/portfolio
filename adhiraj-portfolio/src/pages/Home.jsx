import React from 'react';
import FallingText from '../components/FallingText';
import '../components/FallingText.css';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const navLinkStyle = {
  color: '#ffffff',
  textDecoration: 'none',
  opacity: 0.8,
  transition: 'opacity 0.3s',
};

function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />


      {/* Main Section */}
      <main
        style={{
          height: '100vh',
          width: '100vw',
          backgroundColor: '#0d0d0d',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0 2rem',
          boxSizing: 'border-box',
          fontFamily: 'Inter, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Left-Center-Right Intro */}
        <div
          style={{
            width: '100%',
            maxWidth: '800px',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            fontFamily: 'Space Grotesk, sans-serif',
            color: '#ffffff',
            textTransform: 'uppercase',
          }}
        >
          <div
            style={{
              textAlign: 'left',
              fontSize: '1.5rem',
              fontWeight: 300,
              letterSpacing: '0.15rem',
            }}
          >
            Hi, this is
          </div>

          <div
            style={{
              textAlign: 'center',
              fontSize: '2.2rem',
              fontWeight: 300,
              letterSpacing: '0.25rem',
            }}
          >
            Adhiraj Chanana
          </div>

          <div
            style={{
              textAlign: 'right',
              fontSize: '1.5rem',
              fontWeight: 300,
              letterSpacing: '0.15rem',
            }}
          >
            and this is my website
          </div>
        </div>

        {/* FallingText under the name */}
        <div
          style={{
            width: '100%',
            maxWidth: '1000px',
            height: '250px',
            marginTop: '2rem',
            position: 'relative',
            overflow: 'visible',
          }}
        >
          <FallingText
           text={`Developer. Développeur. Innovator. Innovatore. 创新者. Entwickler. Creator. Créateur. Создатель. Desarrollador. Diseñador. Designer. Designer graphique. Entwickler. 开发者. デベロッパー. مطور.`}
           highlightWords={["Developer", "Innovator", "创新者", "Creator", "Создатель", "Designer", "開発者", "デベロッパー"]}           
            highlightClass="highlighted"
            trigger="hover"
            backgroundColor="transparent"
            wireframes={false}
            gravity={0.56}
            fontSize="2rem"
            mouseConstraintStiffness={0.9}
          />
        </div>

        {/* Tagline */}
        <p
          style={{
            fontSize: '1.1rem',
            maxWidth: '600px',
            textAlign: 'center',
            opacity: 0.8,
            marginTop: '2.5rem',
          }}
        >
          Exploring ideas that bounce, bend, and come alive.
        </p>

        {/* Footer */}
        <div
          style={{
            position: 'absolute',
            bottom: '1.2rem',
            fontSize: '0.75rem',
            opacity: 0.3,
            letterSpacing: '1px',
          }}
        >
          ⚡ Portfolio v2025 — Made with caffeine & curiosity
        </div>
      </main>
    </>
  );
}

export default Home;
