import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Acme&family=Patua+One&display=swap');


  html {
    height: 100%;
  }

  body {
    width: 100%;
    min-height: 100%;
    position: relative;
    margin: auto;
    padding: 0;
    padding-bottom: 5rem;
    background: black;
    font-family: 'Patua One', cursive;
  }
  h1 {
    font-family: 'Acme', sans-serif, bold;
    font-size: 36px;
    text-align: center;
    color: white;
    }
  h2 {
    font-family: 'Acme', sans-serif, bold;
    font-size: 16px;
  }
  h3 {
    font-family: 'Acme', sans-serif, bold;
    font-size: 14px;
    margin: 0 1em 1em;
  }
  p {
    font-family: 'Patua One', cursive;
    font-size: 1.3em;
    color: white;
  }

  a {
    text-decoration: none;
    color: black;
  }

  button {
    width: 15em;
    background-color: #F8B266;
    border-radius: 10px;
    border: 1px solid black;
    padding: 10px;
    font-size: 1em;
    font-family: 'Acme', sans-serif;
    box-shadow: 1px 2px 2px hsl(0deg 0% 0% / 0.38);

    &:hover {
        transform: scale(1.1);
        transition: 0.3s;
        box-shadow: 2px 4px 4px hsl(0deg 0% 0% / 0.38);
    }
  }
`;

export default GlobalStyle;