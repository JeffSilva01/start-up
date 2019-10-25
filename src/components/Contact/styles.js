import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  section {
    margin: auto;
    width: 1100px;
    margin: auto;

    h1 {
      color: #1e1e69;
      text-align: center;
      font-size: 3.6rem;
      font-weight: 400;
      margin-bottom: 40px;
    }

    form {
      margin: auto;
      margin-bottom: 50px;
      width: 500px;
      display: flex;
      flex-direction: column;
      font-size: 1.5rem;

      input {
        ::placeholder {
          color: #fff;
          text-align: center;
        }
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
        resize: none;
        height: 100px;
        background-color: #e6e7e8;
        border: none;
        border-radius: 5px;
        padding: 15px;
      }

      button {
        height: 40px;
        border: none;
        border-radius: 5px;
        margin-top: 5px;
        background-color: #01874a;
      }
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 365px;
      }

      div {
        flex-direction: column;
        align-items: initial;
        margin-left: 50px;

        h3 {
          font-size: 2.7rem;
          font-weight: 400;
          color: #1e1e69;

          strong {
            font-weight: 700;
          }
        }

        h5 {
          font-size: 1.8rem;
          color: #1e1e69;
          font-weight: 400;
        }

        a {
          text-decoration: none;
          color: #1e1e69;
          font-size: 2.5rem;
          display: flex;
          align-items: center;

          strong {
            margin-left: 5px;
            font-size: 3.5rem;

            svg {
              margin-left: 5px;
            }
          }
        }
      }
    }
  }
`;
