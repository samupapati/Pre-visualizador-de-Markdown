import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --fundo: #3a3535;
        --fundo-header: #4d4444;
        --cor1: #423b3b;
        --cor2: #ffffff
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
            margin-top: 0;
        }
    }
    h1{
        border-bottom: 2px solid gray;
    }
    h2{
        border-bottom: 1px solid gray;
    }
    a{
        color: #00eeff;
        &:visited{
            color: #00eeff;
        }
    }
    li{
        //parei aqui
    }
    p{
        margin-bottom: 16px;
    }
    ul > li, ol > li{
        margin-left: 20px;
    }
    code, pre{
        background-color: white;
        color: black;
        font-weight: bold;
    }
    pre{
        padding: 8px;
    }
    blockquote{
        background-color: gray;
        padding: 8px;
        position: relative;

        p{
            margin: 0;
        }
        &::before{
            content: '';
            width: 10px;
            height: 100%;
            background-color: #000000;
            position: absolute;
            top: 0;
            left: -10px;
        }
    }
    #editor, #preview{
        &::-webkit-scrollbar{
            width: 6px;
        }
        &::-webkit-scrollbar-track{
            background-color: var(--fundo-header);
        }
        &::-webkit-scrollbar-thumb{
            background-color: var(--cor2);
        }
    }
`