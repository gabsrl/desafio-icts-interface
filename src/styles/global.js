import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, border-style, #root {
    min-height: 100%;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: #731BEE;
    -webkit-font-smoothing: antialiased !important;
  }
  button {
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    html {
      font-size: 50%;
    }
  }

  @media (max-width: 768px) {
    html {
      font-size: 45%;
    }
  }

  @media (max-width: 425px) {
    html {
      font-size: 35%;
    }
  }
`;
