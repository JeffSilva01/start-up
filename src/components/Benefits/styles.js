import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  padding-top: 50px;

  @media (max-width: 540px) {
    padding-top: 15px;
  }
`;

export const Content = styled.div`
  max-width: 1100px;
  width: 100%;
  padding: 0 20px;
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 50px;

    @media (max-width: 540px) {
      font-size: 2rem;
      margin-bottom: 10px;
      max-width: 300px;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  button {
    width: 330px;
    padding: 10px;
    background-color: #ccc;
    border: none;
    border-radius: 5px;
    margin: 5px 15px;
    font-size: 1.7rem;
    color: #1e1e69;
    font-weight: 700;
    transition: 0.3s;

    :hover {
      background-color: #1e1e69;
      color: #fff;
    }

    @media (max-width: 540px) {
      padding: 8px;
    }
  }
`;

export const Teste = styled.div`
  display: flex;
  width: 100%;

  align-items: center;
  justify-content: space-around;
  margin-top: 70px;

  hr {
    height: 200px;
    background-color: #aaa;
  }

  /* #segunda {
    margin-top: 30px;
  } */

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    text-align: center;

    ul {
      margin-top: 10px;
      text-align: start;
      @media (max-width: 720px) {
        width: 200px;
      }
    }
  }

  @media (max-width: 720px) {
    max-width: 230px;
    flex-direction: column;
    margin-top: 5px;

    hr {
      display: none;
    }

    div {
      margin-top: 15px;
    }
  }
`;
