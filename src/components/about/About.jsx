import React from 'react';
import "./about.css";
import Image from "../../assets/avatar-2.svg";
import AboutBox from './AboutBox';

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">Sobre mim</h2>
      <div className="about__container grid">
        <img src={Image} alt="" className="about__img"/>
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Sou uma pessoa que ama dinossauros.
            </p>
            <button type="button" className="btn">Baixar CV</button>
          </div>
          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">
                  Gostar de dinossauros
                </h3>
                <span className="skills__number">
                  100%
                </span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage"></span>
              </div>
              
            </div>
          </div>

        </div>
      </div>
      <AboutBox />
    </section>
    
  )
}

export default About