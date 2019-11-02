import React from 'react';

import { Container } from './styles';

import computer from '../../assets/computer.png';
import startistic from '../../assets/statistics.svg';

export default function News() {
  return (
    <Container>
      <div>
        <img id="startisticNew" src={startistic} alt="startistic" />

        <img src={computer} alt="computer" />
        <p>
          SAO PAULO — Consensos são raros, mas existem. E, quando falamos de
          recrutamento, os consultores são enfáticos ao responder qual é o
          principal ponto fraco dos brasileiros: o baixo domínio do inglês. O
          gap (sim, gap, palavra usada pelo mercado para definir a falha em
          alguma competência) influencia negativamente no momento da
          contratação, na hora de urna promoção e, também, nos ganhos
          financeiros. De acordo com uma pesquisa da Catho, sito de busca de
          empregos, o domínio de um idioma estrangeiro pode engordar o
          contracheque em até 52%. Mas, no Brasil, apenas 5% da população fala
          uma segunda língua e menos de 3% têm fluência em inglês. Ao contrário
          do que muita gente imagina, o problema não está só em pessoas de
          cargos mais b domínio de um idioma estrangeiro pode engordar o
          contracheque em até 52%. Mas, no Brasil, apenas 5% da população fala
          uma segunda linguá e menos de 3% têm fluência em inglês. Ao contrário
          do que muita gente imagina, o problema não está só em pessoas de
          cargos mais baixos. <strong>Veja a matéria completa</strong>
          <a
            href="https://exame.abril.com.br/carreira/por-que-ainda-nao-somos-fluentes-em-ingles/"
            target="_blank"
            rel="noopener noreferrer"
          >
            clicando aqui
          </a>
        </p>
      </div>
    </Container>
  );
}
