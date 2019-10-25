import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 100%;

  div {
    width: 1100px;
    margin: auto;
    background-color: #ddd;

    h1 {
      font-size: 2.5rem;
      text-align: center;
    }

    button {
      min-width: 235px;
      padding: 10px;
      background-color: #ccc;
      border: none;
      border-radius: 5px;
      margin: 15px;
      font-size: 1.7rem;
      color: #1e1e69;
      font-weight: 700;
      transition: 0.3s;

      :hover {
        background-color: #1e1e69;
        color: #fff;
      }
    }
  }
`;
