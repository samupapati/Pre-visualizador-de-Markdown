import { useState } from "react";
import { styled } from "styled-components"

const TextArea = styled.textarea`
    width: 90%;
    padding: 16px;
    background-color: var(--fundo);
    color: var(--cor2);
    min-width: 350px;
    min-height: 300px;
    outline: none;
    border: none;
    box-shadow: 0px 0px 1px 0px gray;
    border-radius: 10px;

    &:focus{
        background-color: #fff;
        color: var(--cor1);
    }
    @media all and (min-width: 1000px){
        height: 100%;
        overflow-x: auto;
        resize: none;
    }
`

function Input({handleInput}){
    const [value, setValue] = useState(() => {
        let text = '# Markdown\n\nO Markdown é uma ferramenta de conversão de texto para HTML pensada para escritores na web. Foi criada em 2004 por John Gruber com colaboração de Aaron Swartz, e estruturada para ser fácil de ler e escrever, transformando em um arquivo XHTML ou HTML válido e estruturado.\n\n## Sintaxe básica do Markdown\n\n### Títulos\nPara escrever um título, inclua # e um espaço antes do texto. O número de # representa o nível do título, que vai de 1 a 6.\n\n# H1: # texto\n## H2: ## texto\n### H3: ### texto\n#### H4: #### texto\n##### H5: ##### texto\n###### H6: ###### texto\n\n### Links\nPara escrever um link, inclua o texto do link dentro de um [], seguido do link dentro de um (). exemplo: \n\n\\[Google](https://www.google.com)\n\nresultado: [Google](https://www.google.com)\n\n### Código em linha\nPara escrever um código em linha, coloque o código dentro de ``. exemplo:\n\nA tag \\`<body></body>` é usada para inserir os conteúdos da página.\n\nresultado: A tag `<body></body>` é usada para inserir os conteúdos da página.\n\n### Código multi linhas\nPara escrever códigos em várias linhas, coloque o código dentro de ``````. exemplo:\n\n\\```\n\nfunction verificarIdade(){\n    \n        if(idade >= 18){      \n            return "Você pode dirigir!"\n        }\n        return "Você não pode dirigir!"\n\n}\n\n\\```\n\nresultado:\n\n```\nfunction verificarIdade(){\n    \n        if(idade >= 18){    \n              return "Você pode dirigir!"\n        }\n        return "Você não pode dirigir!"\n\n}\n\n\n```\n\n### Listas\n#### Listas Ordenadas\nPara escrever listas ordenadas, insira qualquer número, seguido de um . e um espaço antes do texto. exemplo:\n\n1. Abacate \n2555. Banana\n3999. Caju\n\n\nresultado:\n\n1. Abacate\n2. Banana\n3. Caju\n\n###\n#### Listas não Ordenadas\nPara escrever listas não ordenadas, insira -, + ou *, seguido de um espaço, antes do texto. exemplo:\n\n-. Abacate\n+. Banana\n*. Caju\n\n\nresultado:\n\n- Abacate\n+ Banana\n* Caju\n\n###\n### Citações\nPara escrever um texto em forma de citação, adicione um > seguido de um espaço antes do texto. exemplo:\n\n`>` Falar é fácil, me mostre o código.\n\n\nresultado\n\n> Falar é fácil, me mostre o código.\n\n### Texto em Negrito\nPara escrever um texto em negrito, coloque o texto dentro de ** **. exemplo:\n\nO **HTML** é o esqueleto, composto dos ossos que o sustenta. O **CSS** é a pele, cabelo e roupas, criando o visual que realmente enxergamos quando olhamos para alguma pessoa. E por fim, o **Javascript** é o músculo, que dá movimento ao corpo.\n\nresultado:\n\nO **HTML** é o esqueleto, composto dos ossos que o sustenta. O **CSS** é a pele, cabelo e roupas, criando o visual que realmente enxergamos quando olhamos para alguma pessoa. E por fim, o **Javascript** é o músculo, que dá movimento ao corpo.\n\n### Imagens\nPara adicionar uma imagem é parecido com o link, porém deve-se adicionar uma ! antes do [](). Onde [] é escrito o texto da imagem, caso ela não seja carregada, e () é escrito o link da imagem. exemplo:\n\n\\!\\[desenho de uma paisagem montanhosa](https://img.freepik.com/vetores-gratis/desenho-plano-desenhado-a-mao-paisagem-montanhosa_52683-79195.jpg)\n\n![desenho de uma paisagem montanhosa](https://img.freepik.com/vetores-gratis/desenho-plano-desenhado-a-mao-paisagem-montanhosa_52683-79195.jpg)';
        handleInput(text);
        return text
    })

    return(
        <TextArea id="editor" onChange={(e) => {
            setValue(e.target.value)
            handleInput(e.target.value)
        }} value={value}></TextArea>
    )
}

export default Input;