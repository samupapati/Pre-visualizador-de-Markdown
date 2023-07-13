import { useState } from 'react';
import Input from './components/Input'
import Result from './components/Result';
import Markdown from 'marked-react';
import { styled } from 'styled-components';

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--fundo);
`

const Header = styled.header`
  @media all and (min-width: 1000px) {
    width: 100%;
    height: 40px;
    background-color: var(--fundo-header);
    padding: 0 0 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1{
      font-size: 24px;
      font-family: 'Rubik Glitch';
      margin: 0;
      line-height: 0;
    }
  }
`

const Title = styled.h1`
  color: var(--cor1);
  border: none;
  font-family: 'Rubik Glitch';
`

const Buttons = styled.div`
  display: none;
  @media all and (min-width: 1000px){
    width: 100px;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`

const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
  transition: background .3s;
  transition: color .3s;

  &:hover{
    background-color: gray;
    color: var(--cor1);
  }
  &#close:hover{
    background-color: red;
    color: white;
  }
`

const Tabs = styled.div`
  @media all and (min-width: 1000px){
    width: 100vw;
    height: 30px;
    padding-left: 24px;
    background-color: var(--fundo-header);
    display: flex;
    flex-wrap: wrap;
    overflow-y: auto;
    margin-bottom: 32px;
  }
`

const TabName = styled.button`
  width: 120px;
  height: 100%;
  border: none;
  background-color: var(--fundo-header);
  color: var(--cor3);
  cursor: pointer;

  &.active{
    background-color: var(--fundo);
  }
`

const Texts = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media all and (min-width: 1000px){
    height: calc(100vh - 120px);
    flex-direction: row;
    align-items: flex-start;
    padding: 32px;
    gap: 32px;
  }
`

function App() {
  const [text, setText] = useState('')

  function handleInput(text) {
    setText(<Markdown>{text}</Markdown>)
  }


  return (
    <Container>
      <Header>
        <Title translate='no'>Markdown Previewer</Title>
        <Buttons>
          <Button>&#8259;</Button>
          <Button>&#8862;</Button>
          <Button id='close'>&#x2715;</Button>
        </Buttons>
      </Header>
      <Tabs>
        <TabName translate='no' className='active'>untitled.md</TabName>
      </Tabs>
      <Texts>
        <Input handleInput={handleInput} />
        <Result result={text} />
      </Texts>
    </Container>
  );
}

export default App;
