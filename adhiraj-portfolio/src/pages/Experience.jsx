import React from 'react';
import Navbar from '../components/Navbar';
import Folder from '../components/Folder';

function Experience() {
  return (
    <>
      <Navbar />
      <div
        style={{
          background: '#000',
          minHeight: '100vh',
          padding: '8rem 4rem 4rem 4rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start'
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '4rem 6rem',
            justifyContent: 'center',
            alignItems: 'center',
            transform: 'translateX(100px) translateY(120px)',
          }}
        >
          {/* Web Dev */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Folder
              size={2}
              color="#5227FF"
              items={[
                <p style={{ fontSize: '0.35rem', color: '#000' }}>
                  Developed backend features & APIs, reduced manual processing by 30%.
                </p>,
                <p style={{ fontSize: '0.35rem', color: '#000' }}>
                  Debugged full-stack issues, improved UI/UX & optimized Drupal modules.
                </p>,
              ]}
            />
            <h4 style={{ color: '#fff', margin: '3rem 0 0.3rem' }}>Web Development Intern</h4>
            <p style={{ color: '#aaa', fontSize: '0.9rem' }}>
              MSU Student Life · May 2025 - Present
            </p>
          </div>

          {/* RA */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Folder
              size={2}
              color="#E91E63"
              items={[
                <p style={{ fontSize: '0.35rem', color: '#000' }}>
                  Fostered community & inclusivity, resolved conflicts with care.
                </p>,
                <p style={{ fontSize: '0.35rem', color: '#000' }}>
                  Ran growth & diversity events, supported residents’ academic & personal needs.
                </p>,
              ]}
            />
            <h4 style={{ color: '#fff', margin: '3rem 0 0.3rem' }}>Resident Assistant</h4>
            <p style={{ color: '#aaa', fontSize: '0.9rem' }}>
              MSU · Jan 2025 - Present
            </p>
          </div>

          {/* LA */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Folder
              size={2}
              color="#009688"
              items={[
                <p style={{ fontSize: '0.35rem', color: '#000' }}>
                  Guided CSE231 labs on Python, data structures, debugging & problem solving.
                </p>,
                <p style={{ fontSize: '0.35rem', color: '#000' }}>
                  Created inclusive, supportive learning environment for diverse student backgrounds.
                </p>,
              ]}
            />
            <h4 style={{ color: '#fff', margin: '3rem 0 0.3rem' }}>Undergrad Learning Assistant</h4>
            <p style={{ color: '#aaa', fontSize: '0.9rem' }}>
              CSE Dept · Jan 2025 - Present
            </p>
          </div>

          {/* Research */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Folder
              size={2}
              color="#FFA500"
              items={[
                <p style={{ fontSize: '0.35rem', color: '#000' }}>
                  Built advanced JS visualization tool analyzing extreme climate trends (1979–2070).
                </p>,
                <p style={{ fontSize: '0.35rem', color: '#000' }}>
                  Enabled predictive insights into spatiotemporal datasets for scientific research.
                </p>,
              ]}
            />
            <h4 style={{ color: '#fff', margin: '3rem 0 0.3rem' }}>Professorial Research Assistant</h4>
            <p style={{ color: '#aaa', fontSize: '0.9rem' }}>
              MSU · Aug 2023 - Present
            </p>
          </div>

          {/* Marketing */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Folder
              size={2}
              color="#3F51B5"
              items={[
                <p style={{ fontSize: '0.35rem', color: '#000' }}>
                  Grew event attendance & membership by 200% through targeted campaigns.
                </p>,
                <p style={{ fontSize: '0.35rem', color: '#000' }}>
                  Developed content, analytics strategy, and fostered a vibrant ISO community.
                </p>,
              ]}
            />
            <h4 style={{ color: '#fff', margin: '3rem 0 0.3rem' }}>Co-Director Marketing</h4>
            <p style={{ color: '#aaa', fontSize: '0.9rem' }}>
              Indian Students Org · May 2024 - Jun 2025
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
