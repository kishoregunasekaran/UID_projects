// src/UserProfile.js
import React, { useState } from 'react';
import profileImage from './CDT_KISHORE.jpeg'; 
import p1 from './kec_1.png'; 
import p2 from './grocery_1.png'; 
import p3 from './tn_law_1.png'; 
import p4 from './book_1.png'; 
import c1 from './c1.jpeg'; 
import c2 from './c2.jpeg'; 
import c3 from './c3.jpeg'; 
import bg from './bg.jpeg';

function UserProfile(props) {
  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <div style={styles.background}>
      <nav style={styles.navbar}>
        <a href="#home" style={styles.navLink}>Home</a>
        <a href="#skills" style={styles.navLink}>Skills</a>
        <a href="#projects" style={styles.navLink}>Projects</a>
        <a href="#achievements" style={styles.navLink}>Achievements</a>
        <a href="#contact" style={styles.navLink}>Contact</a>
      </nav>

      <div id="home" style={styles.section}>
        <div style={styles.container}>
          <img src={profileImage} alt="Profile" style={styles.profileImage} />
          <h2 style={styles.name}>{props.name}</h2>
          <p style={styles.bio}>{props.bio}</p>
          <div style={styles.info}>
            <p>Email: {props.email}</p>
            <p>Location: {props.location}</p>
          </div>
        </div>
      </div>

      <div id="skills" style={styles.section}>
        <h2 style={styles.heading}>Skills</h2>
        <div style={styles.tex}>
          <ul>
            {props.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div style={styles.imageRow}>
          <img
            src={c1}
            alt="Skill 1"
            style={hoveredImage === 'c1' ? { ...styles.projectImage, ...styles.projectImageHover } : styles.projectImage}
            onMouseEnter={() => setHoveredImage('c1')}
            onMouseLeave={() => setHoveredImage(null)}
          />
          <img
            src={c2}
            alt="Skill 2"
            style={hoveredImage === 'c2' ? { ...styles.projectImage, ...styles.projectImageHover } : styles.projectImage}
            onMouseEnter={() => setHoveredImage('c2')}
            onMouseLeave={() => setHoveredImage(null)}
          />
          <img
            src={c3}
            alt="Skill 3"
            style={hoveredImage === 'c3' ? { ...styles.projectImage, ...styles.projectImageHover } : styles.projectImage}
            onMouseEnter={() => setHoveredImage('c3')}
            onMouseLeave={() => setHoveredImage(null)}
          />
        </div>
      </div>

      <div id="projects" style={styles.section}>
        <h2 style={styles.heading}>Projects</h2>
        <div style={styles.tex}>
          <ul>
            {props.projects.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
          <div style={styles.imageRow}>
            <img
              src={p1}
              alt="Project 1"
              style={hoveredImage === 'p1' ? { ...styles.projectImage, ...styles.projectImageHover } : styles.projectImage}
              onMouseEnter={() => setHoveredImage('p1')}
              onMouseLeave={() => setHoveredImage(null)}
            />
            <img
              src={p2}
              alt="Project 2"
              style={hoveredImage === 'p2' ? { ...styles.projectImage, ...styles.projectImageHover } : styles.projectImage}
              onMouseEnter={() => setHoveredImage('p2')}
              onMouseLeave={() => setHoveredImage(null)}
            />
            <img
              src={p3}
              alt="Project 3"
              style={hoveredImage === 'p3' ? { ...styles.projectImage, ...styles.projectImageHover } : styles.projectImage}
              onMouseEnter={() => setHoveredImage('p3')}
              onMouseLeave={() => setHoveredImage(null)}
            />
            <img
              src={p4}
              alt="Project 4"
              style={hoveredImage === 'p4' ? { ...styles.projectImage, ...styles.projectImageHover } : styles.projectImage}
              onMouseEnter={() => setHoveredImage('p4')}
              onMouseLeave={() => setHoveredImage(null)}
            />
          </div>
        </div>
      </div>

      <div id="achievements" style={styles.section}>
        <h2 style={styles.heading}>Achievements</h2>
        <div style={styles.tex}>
          <ul>
            {props.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      </div>

      <div id="contact" style={styles.section}>
        <div style={styles.container}>
          <h2>Contact</h2>
          <p>Email: {props.email}</p>
          <p>Location: {props.location}</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  background: {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
  },
  navbar: {
    position: 'fixed',
    top: 0,
    width: '100%',
    backgroundColor: '#333',
    padding: '10px 0',
    textAlign: 'center',
    zIndex: 1000,
  },
  navLink: {
    margin: '0 20px',
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
  },
  section: {
    padding: '40px 20px',
    paddingRight: '20px',
    minHeight: '50vh',
    backgroundColor: 'rgba(244, 244, 244, 0.8)', // Adjust to make background image visible
  },
  container: {
    textAlign: 'center',
  },
  profileImage: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    marginBottom: '20px',
    marginTop: '40px',
  },
  name: {
    fontSize: '24px',
    margin: '10px 0',
  },
  bio: {
    fontSize: '16px',
    color: '#666',
  },
  info: {
    fontSize: '14px',
    color: '#333',
  },
  tex: {
    paddingLeft: '250px',
  },
  heading: {
    paddingLeft: '250px',
  },
  imageRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px', // Space between images
    marginTop: '20px',
  },
  projectImage: {
    width: '290px',
    height: '200px',
    borderRadius: '5px',
    transition: 'transform 0.3s ease-in-out',
  },
  projectImageHover: {
    transform: 'scale(1.1)',
  },
};

export default UserProfile;
