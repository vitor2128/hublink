import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      transition: background-color 5000s;
      -webkit-text-fill-color: #fff !important;
    }

  }

  /* *::before,
  *::after {
    box-sizing: border-box;
  } */

  body {
    background: #312e38;
    color: #fff;
    /* min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5; */
    -webkit-font-smoothing: antialiased;
  }

  ul,

  ol {
    list-style: none;
  }

  /* img {
   max-width: 100%;
    display: block;
  } */

  a {
    text-decoration: none;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  body, input, button {
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }

  @media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`;
