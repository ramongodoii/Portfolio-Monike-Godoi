import React from 'react'

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
        <div className="about__box">
            <i className="about__icon icon-fire"></i>
            <div>
                <h3 className="about__title">10</h3>
                <span className="about__subtitle">Projetos completos</span>
                
            </div>
        </div>
        <div className="about__box">
            <i className="about__icon icon-heart"></i>
            <div>
                <h3 className="about__title">1500</h3>
                <span className="about__subtitle">Dinossauros amados</span>
                
            </div>
        </div>
        <div className="about__box">
            <i className="about__icon icon-bubble"></i>
            <div>
                <h3 className="about__title">3000</h3>
                <span className="about__subtitle">Desculpas contadas</span>
                
            </div>
        </div>
    </div>
  )
}

export default AboutBox