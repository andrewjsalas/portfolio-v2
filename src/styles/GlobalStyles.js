import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Josefin Sans', sans-serif;
    background-image: linear-gradient(62deg, #28313a 0%, #171618 100%);
    color: white;
  }
`

export default GlobalStyle