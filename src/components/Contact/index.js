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
          <Input name="name" placeholder="Nome" />
          <Input name="email" placeholder="E-mail" />
          <Input name="whatsapp" placeholder="Telefone (Whatsapp)" />
          <Input
            name="message"
            multiline
            placeholder="Deixe sua mensagem"
            maxLength="250"
          />

          <button type="submit">Eenviar</button>
        </Form>

        <div>
          <img src={Logo} alt="" />
          <div>
            <h5>contato@startupidiomas.com.br</h5>
            <a href="https://wa.me/5585997802657">
              85
              <strong>
                99780-2657
                <FaWhatsapp size="20" />
              </strong>
            </a>
          </div>
        </div>
      </section>
    </Container>
  );
}
