import React from 'react';
import "./about.css";
import Image from "../../assets/avatar-2.svg";
import AboutBox from './AboutBox';
import SkillsIcons from './SkillsIcons';

import illustratorIcon from '../../assets/icon-1.png';
import ibisPaint from '../../assets/icon-2.png';
import blender from '../../assets/icon-3.png';
import canva from '../../assets/icon-4.png';
import photoshop from '../../assets/icon-5.png';
import InDesign from '../../assets/icon-6.png';
import premiere from '../../assets/icon-7.png';
import aftereffects from '../../assets/icon-8.png';

const About = () => {
  const skillsIcons = [
    { src: illustratorIcon, alt: 'Illustrator' },
    { src: ibisPaint, alt: 'ibisPaint' },
    { src: blender, alt: 'Blender' },
    { src: canva, alt: 'Canva' },
    { src: photoshop, alt: 'Photoshop' },
    { src: InDesign, alt: 'InDesign' },
    { src: premiere, alt: 'Premiere' },
    { src: aftereffects, alt: 'After Effects' },
  ];

  return (
    <section className="about container section" id="about">
      <h2 className="section__title">Sobre mim</h2>
      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Sou designer multimídia com experiência em ilustração. Sou apaixonada por
              desenho e storytelling e também trabalho com logotipos e identidades visuais. Busco sempre
              soluções visuais que conectem estética, funcionalidade e significado.
            </p>
            <button type="button" className="btn">Baixar CV</button>
          </div>
          <div className="about__skills grid">
            <SkillsIcons icons={skillsIcons} />
          </div>
        </div>
      </div>
      <AboutBox />
    </section>
  );
};

export default About;