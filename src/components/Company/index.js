import React from 'react';

import { Container, Content, Text } from './styles';

import logo from '../../assets/logo.svg';
import boy from '../../assets/boy.svg';
import megaphone from '../../assets/megaphone.svg';
import trophy from '../../assets/trophy.svg';

export default function Company() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="Logo StartUP" />
        <Text>
          <div>
            <img src={boy} alt="boy" />
            <h1>Quem somos:</h1>
            <p>
              A Start Up Professional English é uma escola natural de Fortaleza
              que ministra aulas de inglês in company. A metodologia de ensino
              da Start Up permite ao aluno falar, ler, escrever e compreender o
              novo idioma naturalmente, vivenciando situações de trabalho. Além
              de meios de aprendizados eficazes, também oferecemos o teste de
              proficiência TOEIC ao final do curso.
            </p>
          </div>
          <div>
            <img src={megaphone} alt="megaphone" />
            <h1>Propósito:</h1>
            <p>
              Transformar carreiras por meio da aptidão ao inglês profissional.
            </p>
            <hr />
            <h1>Visão:</h1>
            <p>
              Ser referência em inglês profissional no estado do Ceará até 2022.
            </p>
          </div>
          <div>
            <img src={trophy} alt="trophy" />
            <h1>Valores:</h1>
            <p>
              <strong>Eficácia:</strong> Uso de recursos didáticos e
              tecnológicos para impulsionar desempenho. <br />
              <strong>Cortesia:</strong> Empatia para desenvolver os alunos.
              <br />
              <strong>Personalização:</strong> Acompanhamento individual para
              motivação e engajamento.
            </p>
          </div>
        </Text>
      </Content>
    </Container>
  );
}
