import React from 'react'
import { FaFire, FaTasks } from "react-icons/fa";
import { GiCoffeeCup } from "react-icons/gi";

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
        <div className="about__box">
            <FaFire className="about__icon" style={{ color: '#FF6B6B' }} />
            <div className="about__info">
                <h3 className="about__number">10+</h3>
                <p className="about__description">Projetos completos</p>
            </div>
        </div>

        <div className="about__box">
            <svg className="about__icon" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" fill="#FF69B4"/>
            </svg>
            <div className="about__info">
                <h3 className="about__number">3+</h3>
                <p className="about__description">Clientes satisfeitos</p>
            </div>
        </div>

        <div className="about__box">
            <GiCoffeeCup className="about__icon" style={{ color: '#4ECDC4' }} />
            <div className="about__info">
                <h3 className="about__number">1500+</h3>
                <p className="about__description">Xícaras de chá consumidas</p>
            </div>
        </div>

        <div className="about__box">
            <FaTasks className="about__icon" style={{ color: '#6C5CE7' }} />
            <div className="about__info">
                <h3 className="about__number">500+</h3>
                <p className="about__description">Tarefas salvas pelo Ctrl+Z</p>
            </div>
        </div>
    </div>
  )
}

export default AboutBox