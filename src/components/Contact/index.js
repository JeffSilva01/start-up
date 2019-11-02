import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import Logo from '../../assets/logo.svg';

import { Container } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Nos diga seu nome'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  whatsapp: Yup.string()
    .min(10)
    .required('Insira seu what (85) 98888888'),
});

export default function Contact() {
  function handleSubmit(data, { resetForm }) {
    console.log(data);
    resetForm();
    toast.success('Sua mensagem foi enviada.');
  }
  return (
    <Container>
      <section>
        <h1>Agende sua aula experimental</h1>
        <Form schema={schema} onSubmit={handleSubmit}>
          <Input name="name" placeholder="Nome" />
          <Input name="email" placeholder="E-mail" />
          <Input name="whatsapp" placeholder="Telefone (Whatsapp)" />
          <Input
            name="message"
            multiline
            placeholder="Deixe sua mensagem"
            maxLength="250"
          />
          <button type="submit">Enviar</button>
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
