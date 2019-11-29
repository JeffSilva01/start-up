import React from 'react';

import { Container, Content, Contact, Answer } from './styles';

export default function Posts() {
  return (
    <Container>
      <Content>
        <ul>
          <Contact>
            <h1>Jefferson Silva</h1>
            <h2>(85)99987.8510 - jefferson@exibame.com</h2>
            <p>
              Gostaria de saber se você so atende empresas ou se atende pessoas
              individuais, tipo assim um amigo kkk
            </p>
          </Contact>
        </ul>

        <div>
          <button type="button">Copiar</button>
          <Answer>
            <p>
              Hello Israel, how are you? We at Start Up Professional English
              have a huge satisfaction in receiving or getting in touch.
            </p>
            <p>
              ‘‘Olá Israel, tudo bem? Nós, da Start Up Professional English
              temos a enorme satisfação em receber o seu contato’’.
            </p>
            <stromg>...</stromg>
            <p>
              Já imaginou não precisar mais de tradução? Juntamente com seu
              esforço e nossa metodologia você está a um passo dessa conquista.
            </p>
            <p>Gostaria de agendar uma visita com o seu futuro de sucesso?</p>
            <em>
              Atenciosamente, <br />
              Dyckson Moreira | Diretor pedagógico
            </em>
          </Answer>
        </div>
      </Content>
    </Container>
  );
}
