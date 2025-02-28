import React from 'react';
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Entre em contato</h2>

      <div className="contact-container grid">
        <div className="contact__info">
          <h3 className="contact__title">Vamos falar sobre tudo!</h3>
          <p className="contact__details">Envie-me um e-mail.</p>
        </div>

        <form action="" className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input 
                type="text" 
                className="contact__form-input" 
                placeholder="Insira seu nome"
              />
            </div>

            <div className="contact__form-div">
              <input 
                type="email" 
                className="contact__form-input" 
                placeholder="Insira seu e-mail"
              />
            </div>
          </div>

          <div className="contact__form-div">
            <input 
              type="text" 
              className="contact__form-input" 
              placeholder="Insira o assunto"
            />
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea 
              className="contact__form-input" 
              placeholder="Insira sua mensagem"
              cols="30" 
              rows="10"
            ></textarea>
          </div>

          <button type="submit" className="btn">
            Enviar mensagem
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;