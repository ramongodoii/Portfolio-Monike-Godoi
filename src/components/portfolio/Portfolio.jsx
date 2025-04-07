import React, { useState } from 'react';
import "./portfolio.css";
import Menu from "./Menu";
import Masonry from 'react-masonry-css';

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

  // Configuração dos breakpoints para o Masonry
  const breakpointColumnsObj = {
    default: 3,
    1024: 2,
    768: 1
  };

  return (
    <section className="work container section" id="work">
      <h2 className="section__title">Projetos</h2>

      <div className="work__filters">
        <span className="work__item" onClick={() => filterItems("Everything")}>Todos</span>
        <span className="work__item" onClick={() => filterItems("Design")}>Design Gráfico</span>
        <span className="work__item" onClick={() => filterItems("Arte")}>Artes</span>
        <span className="work__item" onClick={() => filterItems("Game")}>Game Designer</span>
        <span className="work__item" onClick={() => filterItems("Outros")}>Outros</span>
      </div>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="work__masonry-grid"
        columnClassName="work__masonry-grid_column"
      >
        {items.map((elem) => {
          const { id, image, title, category } = elem;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt={title} className="work__img" />
                <div className="work__mask"></div>
              </div>

              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>

              <button type="button" className="work__button" aria-label="Ver detalhes do projeto">
                <i className="icon-link work__button-icon"></i>
              </button>
            </div>
          );
        })}
      </Masonry>
    </section>
  );
};

export default Portfolio