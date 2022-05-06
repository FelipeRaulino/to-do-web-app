import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body{
    font-family: 'Inter', sans-serif;
    background-color: #1C252C;
    color: #fff;
  }

`;

export default GlobalStyles;
