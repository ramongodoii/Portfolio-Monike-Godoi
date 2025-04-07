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
      " Busco equilibrar estética e funcionalidade, garantindo que cada detalhe tenha um propósito. Meu foco é criar visuais impactantes que comuniquem bem e causem a sensação certa.",
  },
  {
    id: 2,
    image: Image2,
    title: "Gamer Designer",
    description:
      "Penso sempre na experiência do jogador, desenvolvendo mecânicas que sejam envolventes e contribuam para a imersão. Gosto de testar e ajustar tudo até que o jogo flua como deveria.",
  },
  {
    id: 3,
    image: Image3,
    title: "Escritora",
    description:
      "Minha escrita é voltada para emoção e simbolismo. Gosto de construir histórias que envolvam, que tenham ritmo e deixem espaço para interpretação.",
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
