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
            <ul>
              <li>Aprimoramento do clima organizacional;</li>
              <li>Reconhecimento profissional;</li>
              <li>Diferencial competitivo;</li>
              <li>Retenção de talentos;</li>
              <li>Capacitação de mão de obra;</li>
            </ul>
          </div>

          <hr />

          <div id="segunda">
            <h2>Benefícios para os funcionários:</h2>

            <ul>
              <li>Otimização do tempo;</li>
              <li>Preparação para oportunidades internas;</li>
              <li>Capacidade de atender demandas do mercado, suprir “Gaps”;</li>
              <li>Investimento Valioso;</li>
              <li>Horas complementares;</li>
              <li>Certificado</li>
            </ul>
          </div>
        </Teste>
      </Content>
    </Container>
  );
}
