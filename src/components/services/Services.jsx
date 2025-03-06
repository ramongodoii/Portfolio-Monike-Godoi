import React from 'react';
import "./services.css";
import Image1 from "../../assets/service-1.png";
import Image2 from "../../assets/service-2.png";
import Image3 from "../../assets/service-3.png";

const data = [
  {
    id: 1,
    image: Image1,
    title: "Designer Gráfico",
    description:
      "Descrição....",
  },
  {
    id: 2,
    image: Image2,
    title: "Gamer Designer",
    description:
      "Descrição....",
  },
  {
    id: 3,
    image: Image3,
    title: "Escritora",
    description:
      "Descrição....",
  },
];


const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Serviços</h2>

      <div className="services__container grid">
        {data.map(({id, image, title, description}) => (
          <div className="services__card" key={id}>
            <img src={image} alt="" className="services__img"/>
            <h3 className="services__title">{title}</h3>
            <p className="services__description">{description}</p>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Services
