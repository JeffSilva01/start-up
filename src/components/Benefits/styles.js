import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  padding-top: 50px;

  @media (max-width: 720px) {
    padding-top: 15px;
  }
`;

export const Content = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: auto;

  h1 {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 50px;

    @media (max-width: 720px) {
      font-size: 2rem;
      margin-bottom: 10px;
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

    @media (max-width: 720px) {
      padding: 8px;
    }
  }
`;

export const Teste = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 70px;

  hr {
    height: 200px;
    background-color: #aaa;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    text-align: center;

    p {
      margin-top: 20px;
      text-align: center;
    }
  }

  @media (max-width: 720px) {
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