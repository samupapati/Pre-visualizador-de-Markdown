import { styled } from "styled-components";

const ResultStyle = styled.div`
    width: 90%;
    margin-top: 16px;
    padding: 16px;
    word-wrap: break-word;
    color: var(--cor3);

    img{
        width: 100%;
    }
    @media all and (min-width: 1000px){
        height: 100%;
        overflow-x: auto;
        margin: 0;
        padding-top: 0;
    }
`


function Result({result}){
    return(
        <ResultStyle id="preview">
            {result}
        </ResultStyle>
    )
}

export default Result;