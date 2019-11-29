import React from 'react';

import { Container, Content } from './styles';

import history from '../../services/history';
import firebase from '../../services/firebase';

export default function Login() {
  function handleSubmit({ email, password }) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(history.push('/'))
      .catch();
  }

  return (
    <Container>
      <Content>
        <h1>Login</h1>
        <form>
          <input type="text" name="email" placeholder="email" />
          <input type="password" name="password" placeholder="senha" />
          <button type="submit" onClick={handleSubmit}>
            Entrar
          </button>
        </form>
      </Content>
    </Container>
  );
}
