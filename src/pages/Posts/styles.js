import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
`;

export const Content = styled.div`
  width: 1200px;
  height: 500px;

  display: flex;
  margin: auto;

  ul {
    overflow: auto;
    max-height: 100%;
    width: 600px;
    margin: 40px;
  }
`;

export const Contact = styled.div`
  margin-bottom: 20px;

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 1.4rem;
    font-weight: 400;
  }

  p {
    margin: 10px 0;
  }

  div {
    display: flex;
  }
`;

export const Button = styled.div`
  margin-left: 5px;
  background: none;
  border: none;
  color: ${props => props.color};
`;

export const Answer = styled.div``;
