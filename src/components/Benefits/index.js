import React from 'react';

import { Container, Content, Buttons, Teste } from './styles';

export default function Benefits() {
  return (
    <Container>
      <Content>
        <h1>
          O aluno será estimulado desde <br /> o início para desenvolver alta
          performace em:
        </h1>

        <Buttons>
          <button type="button">Negociações</button>
          <button type="button">Seleções</button>
          <button type="button">Reuniões</button>
          <button type="button">E-mails</button>
          <button type="button">Análises de relatórios</button>
          <button type="button">Telefonemas</button>
        </Buttons>

        <Teste>
          <div>
            <h2>Benefícios para a empresa:</h2>
            <p>
              Aprimoramento do clima organizacional Reconhecimento Profissional
              Diferencial Competitivo Retenção de talentos Capacitação de mão de
              obra
            </p>
          </div>

          <hr />

          <div>
            <h2>Benefícios para os funcionários:</h2>
            <p>
              Otimização do tempo Preparação para oportunidades internas;
              Capacidade de atender demandas do mercado, suprir “Gaps”.
              Investimento Valioso Horas complementares Certificado
            </p>
          </div>
        </Teste>
      </Content>
    </Container>
  );
}
