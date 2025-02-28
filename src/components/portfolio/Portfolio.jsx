import React, { useState } from 'react';
import "./portfolio.css";
import Menu from "./Menu";

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  
  const filterItems = (categoryItem) => {
    if (categoryItem === "Everything") {
      setItems(Menu);
      return;
    }
    
    const updatedItems = Menu.filter((elem) => {
      return elem.category === categoryItem;
    });
    setItems(updatedItems);
  };

  return (
    <section className="work container section" id="work">
      <h2 className="section__title">Projetos</h2>

      <div className="work__filters">
        <span className="work__item" onClick={() => filterItems("Everything")}>Everything</span>
        <span className="work__item" onClick={() => filterItems("Creative")}>Creative</span>
        <span className="work__item" onClick={() => filterItems("Art")}>Art</span>
        <span className="work__item" onClick={() => filterItems("Design")}>Design</span>
        <span className="work__item" onClick={() => filterItems("Branding")}>Branding</span>
      </div>

      <div className="work__container grid">
        {items.map((elem) => {
          const { id, image, title, category } = elem;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>

              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>

              <a href="#" className="work__button" onClick={(e) => e.preventDefault()}>
                <i className="icon-link work__button-icon"></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio