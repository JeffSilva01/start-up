import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Exo:400,700&display=swap');


  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html {
    font-size: 62.5%;
  }

  @media (max-width: 1080px){
    html {
      font-size: 58%;
    }
  }

  @media (max-width: 700px){
    html {
      font-size: 54%;
    }
  }

  html, body, #root {
    height: 100%;

  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 1.4rem 'Exo', sans-serif;
    font-weight: 400;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;
