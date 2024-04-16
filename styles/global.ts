import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  * {
    letter-spacing: .3px;
  }
  *, :after, :before {
    box-sizing: border-box;
  }
  html,
  body {
    width: 100%;
  }
  body, div, h1, h2, h3, p {
    margin: 0;
    padding: 0;
  }
  body {
    background-color: #f8fafc;
  }
  a {
    text-decoration: none !important;
    color: #000;
  }
  a:active, :hover {
    color: inherit;
  }
`;

export default GlobalStyle;
