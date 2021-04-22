import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.3);
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--purple-color);
    border-radius: 5px;
  }


  body {
    margin: 0;
    font-family: var(--roboto-font);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: var(--background-primary);
    color: var(--color-primary);
    overflow-x: hidden;
  }
`;
