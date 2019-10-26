import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;

  section {
    margin: auto;
    max-width: 1100px;
    width: 100%;
    margin: auto;

    h1 {
      color: #0b0b42;
      text-align: center;
      font-size: 3.6rem;
      font-weight: 400;
      margin-bottom: 40px;

      @media (max-width: 720px) {
        font-size: 2.6rem;
        margin-bottom: 5px;
        text-align: center;
      }
    }

    form {
      margin: auto;
      margin-bottom: 50px;
      max-width: 500px;
      width: 100%;
      display: flex;
      flex-direction: column;
      font-size: 1.5rem;
      align-items: center;
      padding: 0 15px;

      input {
        ::placeholder {
          color: #fff;
          text-align: center;
        }
        width: 100%;
        padding: 0 15px;
        color: #fff;
        height: 40px;
        background-color: #0b0b42;
        border: none;
        border-radius: 5px;
        margin-bottom: 7px;
      }

      textarea {
        ::placeholder {
          margin-top: 20px;
          text-align: center;
        }
        width: 100%;
        resize: none;
        height: 100px;
        background-color: #e6e7e8;
        border: none;
        border-radius: 5px;
        padding: 15px;
        margin-bottom: 5px;
      }

      button {
        width: 100%;
        height: 40px;
        border: none;
        border-radius: 5px;
        background-color: #ccc;
        color: #0b0b42;
        transition: 0.2s;

        :hover {
          background-color: #0b0b42;
          color: #ccc;
        }
      }
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;

      @media (max-width: 720px) {
        flex-direction: column;
      }

      img {
        width: 20rem;

        @media (max-width: 720px) {
          margin-bottom: 15px;
        }
      }

      div {
        flex-direction: column;
        align-items: initial;
        margin-left: 50px;

        @media (max-width: 720px) {
          margin: auto;
          align-items: center;
        }

        h5 {
          font-size: 1.5rem;
          color: #0b0b42;
          font-weight: 400;
        }

        a {
          text-decoration: none;
          color: #0b0b42;
          font-size: 2.2rem;
          display: flex;
          align-items: center;

          strong {
            margin-left: 5px;
            font-size: 3.1rem;

            svg {
              margin-left: 5px;
            }
          }
        }
      }
    }
  }
`;
