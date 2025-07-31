import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import FaultyTerminal from '../components/FaultyTerminal';
import './Experience.css';

function Experience() {
  const [loading, setLoading] = useState(true);
  const experienceData = [
    {
      title: 'Web Development Intern',
      org: 'MSU Student Life',
      duration: 'May 2025 - Present',
      tasks: [
        'Developed backend APIs; reduced manual processing by 30%.',
        'Debugged full-stack issues and optimized Drupal modules.',
      ],
    },
    {
      title: 'Resident Assistant',
      org: 'MSU',
      duration: 'Jan 2025 - Present',
      tasks: [
        'Fostered inclusive communities & resolved conflicts.',
        'Hosted events supporting academic and personal growth.',
      ],
    },
    {
      title: 'Undergrad Learning Assistant',
      org: 'CSE Dept',
      duration: 'Jan 2025 - Present',
      tasks: [
        'Guided Python labs, data structures, debugging & problem-solving.',
        'Created inclusive learning environments for diverse students.',
      ],
    },
    {
      title: 'Professorial Research Assistant',
      org: 'MSU',
      duration: 'Aug 2023 - Present',
      tasks: [
        'Built JS tools for visualizing climate trends (1979–2070).',
        'Enabled predictive insights into spatiotemporal datasets.',
      ],
    },
    {
      title: 'Co-Director Marketing',
      org: 'Indian Students Org',
      duration: 'May 2024 - Jun 2025',
      tasks: [
        'Grew event attendance by 200% via targeted campaigns.',
        'Led content strategy and community engagement.',
      ],
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />

      {/* Background Terminal Effect */}
      <div style={{ width: '100%', height: '100vh', position: 'fixed', top: 0, zIndex: -1 }}>
      <FaultyTerminal
  scale={1.5}
  digitSize={1.2}
  timeScale={0.5}         // Speed
  noiseAmp={1}
  brightness={0.6}
  scanlineIntensity={0.5}
  curvature={0.1}
  mouseStrength={0.5}
  mouseReact={true}
  pageLoadAnimation={false} // OFF as requested
  glitchAmount={1}
  flickerAmount={1}
  chromaticAberration={0}
  dither={0}
  tint="#b6efb0"           // Light green tint color from image
/>

      </div>

      {/* Terminal Text Overlay */}
      <div className="experience-terminal">
        <div className="boot-text">
          {loading ? (
            <>
              <p> BOOTING EXPERIENCE.OS...</p>
              <p> Loading modules...</p>
              <div className="loading-bar">
                <div className="progress" />
              </div>
            </>
          ) : (
            <>
              <p> SYSTEM READY.</p>
              <br />
              {experienceData.map((exp, idx) => (
                <div key={idx}>
                  <p className="title">
                    {`> ${exp.title} – ${exp.org} (${exp.duration}) ..........✔`}
                  </p>
                  {exp.tasks.map((task, i) => (
                    <p className="task" key={i}>{`    ↳ ${task}`}</p>
                  ))}
                  <br />
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Experience;
