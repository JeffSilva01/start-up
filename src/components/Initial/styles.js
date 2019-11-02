import styled from 'styled-components';

import background from '../../assets/background.jpg';
import backgroundCell from '../../assets/background-cell.jpg';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  align-items: center;

  background-position-x: right;
  background-color: #3f409c;

  background: url(${background}) no-repeat right;
  background-size: cover;

  @media (max-width: 540px) {
    background: url(${backgroundCell}) no-repeat;
    background-size: cover;
  }
`;

export const Content = styled.div`
  @media (max-width: 540px) {
    width: 100%;
    height: 100%;
    margin: auto;
    display: inline-block;
  }

  width: 1100px;
  height: 100%;
  margin: auto;
  display: flex;

  div {
    margin-right: 85px;

    @media (max-width: 540px) {
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

      @media (max-width: 540px) {
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
        @media (max-width: 540px) {
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
      @media (max-width: 540px) {
        margin-top: 20px;
        margin-bottom: 340px;
        text-align: center;
        max-width: 300px;

        br {
          display: none;
        }
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
      z-index: 1;
    }
  }

  img {
    height: 86%;
    margin-top: 75px;
    z-index: 1;

    @media (max-width: 540px) {
      display: none;
    }
  }
`;
