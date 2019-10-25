import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { Form, Input } from '@rocketseat/unform';

import Logo from '../../assets/logo.svg';

import { Container } from './styles';

export default function Contact() {
  function handleSubmit({ name, email, whatsapp, message }) {
    console.log(name, email, whatsapp, message);
  }
  return (
    <Container>
      <section>
        <h1>Agende sua aula experimental</h1>
        <Form onSubmit={handleSubmit}>
          <Input name="name" placeholder="NOME" />
          <Input name="email" placeholder="E-MAIL" />
          <Input name="whatsapp" placeholder="TELEFONE(WHATSAPP)" />
          <Input
            name="message"
            multiline
            placeholder="Deixe sua mensagem"
            maxLength="250"
          />

          <button type="submit">ENVIAR</button>
        </Form>

        <div>
          <img src={Logo} alt="" />
          <div>
            <h3>
              www.<strong>startupidiomas</strong>.com.br
            </h3>
            <h5>contato@startupidiomas.com.br</h5>
            <a href="https://wa.me/55859978802657">
              85
              <strong>
                997880-2657
                <FaWhatsapp size="30" />
              </strong>
            </a>
          </div>
        </div>
      </section>
    </Container>
  );
}
