import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --fundo: #2e2929;
        --fundo-header: #4d4444;
        --cor1: #13d834;
        --cor2: #423b3b;
        --cor3: #eee
    }
    *{
        margin: 0; padding: 0;
        box-sizing: border-box;
        font-family: 'Metrophobic';
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6{
        margin: 16px 0;
        @media all and (min-width: 1000px){
            margin: 0;
        }
    }
    h1{
        border-bottom: 2px solid gray;
    }
    h2{
        border-bottom: 1px solid gray;
    }
`