import React from 'react';
import "./testimonials.css";
import Image1 from "../../assets/client-1.png";
import Image3 from "../../assets/client-2.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import required modules
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    id: 1,
    image: Image1,
    title: "Romilda Souza",
    subtitle: "Product designer at Dribble",
    comment:
      "O trabalho foi impecável! O design captou exatamente a essência da minha marca e superou minhas expectativas.",
  },
  {
    id: 2,
    image: Image3,
    title: "Ramon Godoi",
    subtitle: "Product designer at Dribble",
    comment:
      "Entrega rápida, comunicação clara e um design que elevou a identidade da minha marca. Excelente!",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonial container section" id="testimonial">
      <h2 className="section__title">Clientes & Avaliações</h2>

      <Swiper 
        className="testimonials__container"
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
      >
        {data.map(({id, image, title, subtitle, comment}) => {
          return (
            <SwiperSlide className="testimonial__item" key={id}>
              <div className="tumble">
                <img src={image} alt={`Foto de ${title}`} />
              </div>
              <h3 className="testimonial__title">{title}</h3>
              <span className="subtitle">{subtitle}</span>
              <div className="comment">{comment}</div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials