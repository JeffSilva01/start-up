import React from 'react';

import { Container, Content } from './styles';

import points from '../../assets/points.svg';
import cell from '../../assets/cell.png';

export default function Initial() {
  return (
    <Container>
      <Content>
        <div>
          <div>
            <img src={points} alt="points" />
            <h1>
              Inglês para você <br />
              <strong>na sua empresa</strong>
            </h1>
          </div>

          <p>
            Acompanhamento personalizado e <br /> uma metodologia prática focada
            em conversação.
          </p>

          <button type="button">Agende sua aula experimental</button>
        </div>

        <img src={cell} alt="cell" />
      </Content>
    </Container>
  );
}
