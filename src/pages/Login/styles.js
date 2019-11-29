import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  background-color: #ccc;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 400px;
  width: 100%;
  height: 300px;

  margin: auto 20px;
  padding: 20px;
  background-color: #fff;

  border-radius: 10px;

  h1 {
    text-align: center;
    margin-bottom: 40px;
  }

  form {
    display: flex;
    flex-direction: column;

    input {
      height: 30px;
      margin-bottom: 20px;
      padding: 0 10px;

      border: 1px solid #ddd;
      border-radius: 5px;
    }

    button {
      height: 30px;
      border: none;
      font-weight: 700;
      color: #fff;
      border-radius: 5px;
      background-color: #3e3e94;
    }
  }
`;
