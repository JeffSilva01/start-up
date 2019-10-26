import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;

  div {
    width: 1100px;
    margin: auto;
    display: flex;
    justify-content: space-around;

    @media (max-width: 720px) {
      width: 100%;
      margin: auto;
      flex-direction: column;
      align-items: center;
    }

    img {
      width: 600px;
      margin-right: 15px;

      @media (max-width: 720px) {
        width: 50%;
      }
    }

    p {
      width: 400px;
      text-align: justify;

      display: flex;
      flex-direction: column;
      align-items: center;

      @media (max-width: 720px) {
        width: 80%;
      }

      strong {
        margin-top: 30px;
        font-size: 2rem;
      }

      a {
        color: #f00;
        font-weight: 700;
        font-size: 2rem;
      }
    }
  }
`;
