import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: transparent;
    outline: none;
    border: none;
    outline:  none;
    list-style-type: none;
    list-style-position: inside;
    text-decoration: none;
    font-family: sans-serif;
  }

  button {
    cursor: pointer;
  }

  body {
    background-color: #f1f1f1;
  }
  main, header, footer {
    padding: 2rem;
  }

  @media (min-width: 768px) {
    main, header, footer {
      padding: 5rem;
    }
  }
`;

export default GlobalStyle;
