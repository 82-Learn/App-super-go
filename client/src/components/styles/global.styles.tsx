import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        color: white;
        height: auto; 
        margin-top: 20px;
        background-size: 100%;
        background-color: black;
        
        
    }

    *:focus {
    outline: 0;
  }
  html, body, #root {
    height: 100%;
    margin-bottom:70px;
    margin-top:0px;
  }

  body {
    -webkit-font-smoothing: antialiased;
    margin-bottom:50px;

  }
  body, input, button {
    font: 14px 'Roboto', sans-serif;

  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }

`;
