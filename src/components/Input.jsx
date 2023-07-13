import { styled } from "styled-components"

const TextArea = styled.textarea`
    width: 90%;
    padding: 16px;
    background-color: var(--fundo);
    color: var(--cor3);
    min-width: 350px;
    min-height: 300px;
    outline: none;
    border: none;
    box-shadow: 0px 0px 1px 0px gray;
    border-radius: 10px;

    &:focus{
        background-color: #fff;
        color: var(--cor2);
    }
    @media all and (min-width: 1000px){
        height: 100%;
        overflow-x: auto;
        resize: none;
    }
`

function Input({handleInput}){
    return(
        <TextArea id="editor" onChange={(e) => handleInput(e.target.value)} res></TextArea>
    )
}

export default Input;