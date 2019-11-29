import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import firebase from '../../services/firebase';

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
  mensagem: Yup.string().max(250),
});

export default function Contact() {
  function handleSubmit(data, { resetForm }) {
    const id = firebase
      .database()
      .ref()
      .child('posts')
      .push().key;

    const update = {};

    update[`/posts/${id}`] = data;

    update[`/posts/${id}`].data = new Date();

    const ref = firebase.database().ref();

    ref
      .update(update)
      .then(() => {
        resetForm();
        return toast.success('Sua mensagem foi enviada.');
      })
      .catch(() => {
        return toast.success(
          'Desculpe, ocorreu um erro no envio do seu formulario.'
        );
      });
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
            name="mensagem"
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
