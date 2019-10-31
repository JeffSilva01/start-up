import styled from 'styled-components';

import background from '../../assets/sunset.png';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  background: url(${background}) no-repeat;
  background-size: cover;

  display: flex;
`;

export const Content = styled.div`
  width: 1100px;
  margin: auto;
  margin-top: -130px;
  padding: 30px;

  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-bottom: 50px;
    width: 300px;
  }

  display: flex;
  flex-direction: column;

  background-color: #fff;
`;

export const Text = styled.div`
  display: flex;

  div {
    margin: 0 15px;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;

    img {
      height: 70px;
    }

    h1 {
      margin-bottom: 20px;
    }

    p {
      text-align: justify;
    }

    hr {
      border: 1px solid #d4432d;
      width: 80%;
      margin: 20px 0;
    }
  }
`;
