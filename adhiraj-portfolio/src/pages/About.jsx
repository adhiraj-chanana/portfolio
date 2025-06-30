import React from 'react';
import Navbar from '../components/Navbar';
import CardSwap, { Card } from '../components/CardSwap';
import TiltedCard from '../components/TiltedCard';
import TextPressure from '../components/TextPressure';

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
          width: '100%',
          minHeight: '100vh',
          background: '#000000',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '8rem',
          padding: '6rem 8rem',
          boxSizing: 'border-box',
          flexWrap: 'wrap',
        }}
      >
        {/* LEFT COLUMN */}
        <div
          style={{
            flex: '1',
            maxWidth: '420px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '3rem',
          }}
        >
          <TiltedCard
            imageSrc={profileImg}
            altText="Adhiraj Image"
            captionText="Adhiraj Chanana"
            containerHeight="240px"
            containerWidth="240px"
            imageHeight="240px"
            imageWidth="240px"
            rotateAmplitude={10}
            scaleOnHover={1.15}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p style={{ color: '#fff', fontSize: '0.8rem', textAlign: 'center' }}>
                Adhiraj Chanana
              </p>
            }
          />

          <div style={{ marginTop: '-1rem', width: '100%', textAlign: 'center' }}>
            <div style={{ height: '60px', marginBottom: '4rem' }}>
              <TextPressure
                text="Who Am I?"
                flex={true}
                alpha={false}
                stroke={false}
                width={true}
                weight={true}
                italic={true}
                textColor="#ffffff"
                minFontSize={28}
                style={{ maxWidth: '100%', whiteSpace: 'nowrap' }}
              />
            </div>
            <p style={{ fontSize: '1rem', lineHeight: '1.7', opacity: 0.9 }}>
              Hey there! I’m Adhiraj — born & raised in the electric chaos of Delhi, now coding my way through Michigan State.
              I’m that curious tech geek who gets way too excited about clever systems and AI that actually thinks.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.7', opacity: 0.9, marginTop: '2rem' }}>
              When I’m not wrangling frontends or scheming up new apps, you’ll catch me at a piano,
              chasing adrenaline jumps out of planes, or losing my voice over a Real Madrid goal.
              Life’s short — might as well build cool stuff and have fun along the way.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div
          style={{
            flex: '1',
            minWidth: '400px',
            maxWidth: '700px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            marginTop: '0rem',
            transform: 'translateY(-80px)', // still lifted
          }}
        >
          <div style={{ height: '60px', marginBottom: '1.5rem' }}>
            <TextPressure
              text=""
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="#ffffff"
              minFontSize={28}
              style={{ maxWidth: '100%', whiteSpace: 'nowrap' }}
            />
          </div>

          <div
            style={{
              width: '100%',
              height: '550px',
              position: 'relative',
              transform: 'translateX(80px) translateY(-100px)', // keep offset to right
            }}
          >
            <CardSwap
              cardDistance={60}
              verticalDistance={65}
              delay={5000}
              pauseOnHover={true}
            >
              <Card style={{
                backgroundImage: `url(${realMadridImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '1.5rem',
                overflow: 'hidden'
              }}>
                <div style={{
                  background: 'rgba(0,0,0,0.55)',
                  padding: '2rem',
                  borderRadius: '1.5rem'
                }}>
                  <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>Real Madrid Fan</h3>
                  <p>If you ever need someone to scream at a TV with you at 2 AM — I’m your guy. Hala Madrid, always.</p>
                </div>
              </Card>

              <Card style={{
                backgroundImage: `url(${skydivingImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '1.5rem',
                overflow: 'hidden'
              }}>
                <div style={{
                  background: 'rgba(0,0,0,0.55)',
                  padding: '2rem',
                  borderRadius: '1.5rem'
                }}>
                  <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>Skydiving</h3>
                  <p>Jumped out of a perfectly good airplane from 15,000 ft — would absolutely do it again. (And again.)</p>
                </div>
              </Card>

              <Card style={{
                backgroundImage: `url(${pianoImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '1.5rem',
                overflow: 'hidden'
              }}>
                <div style={{
                  background: 'rgba(0,0,0,0.55)',
                  padding: '2rem',
                  borderRadius: '1.5rem'
                }}>
                  <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>Piano Player</h3>
                  <p>Passed Trinity Grade 5, but really I just love zoning out and noodling with melodies.</p>
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
