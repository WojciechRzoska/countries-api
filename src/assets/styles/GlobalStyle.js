import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
    }
    
    *,*::after,*::before {
    box-sizing: border-box;
    }

    body {
    font-family: 'Nunito Sans';
    margin: 0;
    padding: 0;
    }
  
    a, button {
    font-family: 'Nunito Sans';
    }
`;
