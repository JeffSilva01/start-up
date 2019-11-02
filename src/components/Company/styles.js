import styled from 'styled-components';

import background from '../../assets/sunset.png';

export const Container = styled.div`
  width: 100%;
  min-height: 100%;

  background: url(${background}) no-repeat;

  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  max-width: 1100px;
  min-height: 550px;
  padding: 20px;
  margin: auto 20px;
  margin-bottom: 20px;
  margin-top: -70px;
  @media (max-width: 540px) {
    padding: 20px;
    margin-top: -50px;
  }

  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: 75px;
    width: 250px;

    @media (max-width: 540px) {
      width: 60%;
    }
  }

  display: flex;
  flex-direction: column;

  background-color: #fff;
`;

export const Text = styled.div`
  display: flex;

  @media (max-width: 540px) {
    flex-direction: column;
  }

  div {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;

    img {
      margin-top: 30px;
      height: 55px;
      @media (max-width: 540px) {
        height: 50px;
      }
    }

    h1 {
      margin-bottom: 5px;
    }

    p {
      text-align: justify;
      @media (max-width: 540px) {
        text-align: center;
      }

      strong {
        margin-top: 5px;
        display: block;
      }
    }

    hr {
      border: 1px solid #d4432d;
      width: 80%;
      margin: 10px 0;
    }
  }
`;
