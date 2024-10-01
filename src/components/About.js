import React from 'react';
import myPhoto from '../assets/my-photo.jpg'

function About() {
  return (
    <div className="about-container">
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          Born January 16, 1994 (30 years old), higher education, not
          married, no children.
          Citizenship: Republic of Uzbekistan.
          I am an IT specialist with some experience in the information
          technology field. Excellent communication skills. Highly organized and
          responsible. Skill to work in team. The desire to further develop,
          participate in new projects and acquire the skills necessary to achieve
          the goal
        </p>
      </div>
      <div className="about-photo">
        <img src={myPhoto} alt="My Photo" />
      </div>
    </div>
  );
}

export default About;
