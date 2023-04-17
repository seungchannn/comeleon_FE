import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`  
${reset}

  * {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;

    a{
      text-decoration:none;
    }

    button{
      cursor: pointer;
    }
  
    body{
      font-family: 'Poppins', sans-serif;
    }
  }


`;

export default GlobalStyle;
