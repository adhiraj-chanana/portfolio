import React from 'react';
import Navbar from '../components/Navbar';
import CardSwap, { Card } from '../components/CardSwap';
import TiltedCard from '../components/TiltedCard';

import realMadridImg from '../assets/realmadrid.jpg';
import skydivingImg from '../assets/skydiving.jpg';
import pianoImg from '../assets/paino.jpg';
import profileImg from '../assets/Adhiraj.jpeg';

function About() {
  return (
    <>
      <Navbar />

      <div
        style={{
          minHeight: '100vh',
          width: '100vw',
          backgroundColor: '#0d0d0d',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '6rem 4rem 4rem 4rem',
          boxSizing: 'border-box',
          gap: '4rem',
          flexWrap: 'wrap',
        }}
      >
        {/* LEFT COLUMN */}
        <div
          style={{
            flex: '1 1 40%',
            minWidth: '320px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <TiltedCard
            imageSrc={profileImg}
            altText="Adhiraj Image"
            captionText="Adhiraj Chanana"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p style={{ color: '#fff', fontSize: '0.9rem', textAlign: 'center' }}>
                Adhiraj Chanana
              </p>
            }
          />

          <div style={{ marginTop: '2.5rem', maxWidth: '500px' }}>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '1.2rem', textAlign: 'center' }}>
              About Me
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', opacity: 0.9, textAlign: 'center' }}>
              Hey, I'm Adhiraj — a computer science major from Delhi, India,
              now studying at Michigan State University. I love building clever systems,
              playful frontends, and AI that actually solves real-world problems.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', opacity: 0.9, textAlign: 'center', marginTop: '1rem' }}>
              Whether it's crafting apps that think for themselves or quirky side projects,
              I enjoy creating things that surprise. Off the screen, you'll find me
              playing piano, chasing adrenaline, or passionately following Real Madrid.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div
          style={{
            flex: '1 1 50%',
            minWidth: '340px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Fun Facts</h2>

          {/* shift only the cards */}
          <div
            style={{
              width: '100%',
              height: '550px',
              position: 'relative',
              marginLeft: '-10rem', // only moves the card stack to overlap left
            }}
          >
            <CardSwap
              cardDistance={50}
              verticalDistance={60}
              delay={5000}
              pauseOnHover={true}
            >
              <Card style={{
                backgroundImage: `url(${realMadridImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '1.5rem',
                overflow: 'hidden',
              }}>
                <div style={{
                  background: 'rgba(0,0,0,0.55)',
                  padding: '2rem',
                  borderRadius: '1.5rem',
                }}>
                  <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Football Fan</h3>
                  <p>Massive Real Madrid supporter. Nothing beats a Champions League night under the lights. Hala Madrid.</p>
                </div>
              </Card>

              <Card style={{
                backgroundImage: `url(${skydivingImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '1.5rem',
                overflow: 'hidden',
              }}>
                <div style={{
                  background: 'rgba(0,0,0,0.55)',
                  padding: '2rem',
                  borderRadius: '1.5rem',
                }}>
                  <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Skydiving</h3>
                  <p>Jumped from 15,000 feet last year — still chasing that adrenaline rush whenever I can.</p>
                </div>
              </Card>

              <Card style={{
                backgroundImage: `url(${pianoImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '1.5rem',
                overflow: 'hidden',
              }}>
                <div style={{
                  background: 'rgba(0,0,0,0.55)',
                  padding: '2rem',
                  borderRadius: '1.5rem',
                }}>
                  <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Piano & Music</h3>
                  <p>Passed Grade 5 Trinity College London piano exam. Playing helps me recharge and explore creativity.</p>
                </div>
              </Card>
            </CardSwap>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
