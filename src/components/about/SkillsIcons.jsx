// src/components/about/SkillsIcons.jsx

import React from 'react';

const SkillsIcons = ({ icons }) => {
  return (
    <div className="skills__container">
      {icons.map((icon, index) => (
        <div key={index} className="skill-icon-wrapper">
          <div className="skill-icon">
            <div className="skill-icon__highlight"></div>
            <img src={icon.src} alt={icon.alt} />
          </div>
          <span className="skill-icon__name">{icon.alt}</span>
        </div>
      ))}
    </div>
  );
};

export default SkillsIcons;