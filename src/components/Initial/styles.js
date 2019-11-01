import styled from 'styled-components';

import background from '../../assets/background.png';
import backgroundCell from '../../assets/background-cell.jpg';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;

  background-position-x: right;
  background-color: #3f409c;
`;

export const Content = styled.div`
  background: url(${background}) no-repeat right;
  background-size: contain;

  @media (max-width: 720px) {
    background: url(${backgroundCell}) no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    margin: auto;
  }

  width: 1100px;
  height: 100%;
  margin: auto;

  display: flex;

  div {
    margin-right: 85px;
    /* width: 100%; */

    @media (max-width: 720px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 0;
    }
    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: 50px;

      @media (max-width: 720px) {
        margin-top: 15px;
        justify-content: center;
      }

      img {
        height: 80px;
        margin-right: 20px;
        margin-top: 0;
      }

      h1 {
        font-size: 4.5rem;
        font-weight: 400;
        color: #fff;
        @media (max-width: 720px) {
          font-size: 4rem;
          text-align: center;
        }
      }
    }

    p {
      font-size: 2rem;
      color: #fff;
      margin-top: 150px;
      margin-bottom: 20px;
      @media (max-width: 720px) {
        margin-top: 20px;
        margin-bottom: 340px;
        text-align: center;
      }
    }

    button {
      width: 350px;
      background-color: #d4432d;
      border-radius: 5px;
      border: none;
      padding: 10px;
      color: #fff;
      font-weight: 700;
      text-transform: uppercase;
    }
  }

  img {
    height: 550px;
    margin-top: 60px;
    z-index: 1;
    @media (max-width: 720px) {
      display: none;
    }
  }
`;