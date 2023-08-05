# Markdown

O Markdown é uma ferramenta de conversão de texto para HTML pensada para escritores na web. Foi criada em 2004 por John Gruber com colaboração de Aaron Swartz, e estruturada para ser fácil de ler e escrever, transformando em um arquivo XHTML ou HTML válido e estruturado.

## Sintaxe básica do Markdown

### Títulos
Para escrever um título, inclua # e um espaço antes do texto. O número de # representa o nível do título, que vai de 1 a 6.

# H1: # texto
## H2: ## texto
### H3: ### texto
#### H4: #### texto
##### H5: ##### texto
###### H6: ###### texto

### Links
Para escrever um link, inclua o texto do link dentro de um [], seguido do link dentro de um (). exemplo: 

\[Google](https://www.google.com)

resultado: [Google](https://www.google.com)

[link](link)

### Código em linha
Para escrever um código em linha, coloque o código dentro de ``. exemplo:

A tag \`<body></body>` é usada para inserir os conteúdos da página.

resultado: A tag `<body></body>` é usada para inserir os conteúdos da página.

### Código multi linhas
Para escrever códigos em várias linhas, coloque o código dentro de ``````. exemplo:

\```

function verificarIdade(){
    
        if(idade >= 18){      
            return 'Você pode dirigir!'
        }
        return 'Você não pode dirigir!'

}

\```

resultado:

```
function verificarIdade(){
    
        if(idade >= 18){      
            return 'Você pode dirigir!'
        }
        return 'Você não pode dirigir!'

}


```

### Listas
#### Listas Ordenadas
Para escrever listas ordenadas, insira qualquer número, seguido de um . e um espaço antes do texto. exemplo:

```
1. Abacate 
2. Banana
3. Caju


```
resultado:

1. Abacate
2. Banana
3. Caju

###
#### Listas não Ordenadas
Para escrever listas não ordenadas, insira -, + ou *, seguido de um espaço, antes do texto. exemplo:

```
-. Abacate 
+. Banana
*. Caju


```
resultado:

- Abacate
+ Banana
* Caju

###
### Citações
Para escrever um texto em forma de citação, adicione um > seguido de um espaço antes do texto. exemplo:

`>` Falar é fácil, me mostre o código.


resultado

> Falar é fácil, me mostre o código.

### Texto em Negrito
Para escrever um texto em negrito, coloque o texto dentro de ** **. exemplo:

O \*\*HTML** é o esqueleto, composto dos ossos que o sustenta. O \*\*CSS\*\* é a pele, cabelo e roupas, criando o visual que realmente enxergamos quando olhamos para alguma pessoa. E por fim, o \*\*Javascript\*\* é o músculo, que dá movimento ao corpo.

resultado:

O **HTML** é o esqueleto, composto dos ossos que o sustenta. O **CSS** é a pele, cabelo e roupas, criando o visual que realmente enxergamos quando olhamos para alguma pessoa. E por fim, o **Javascript** é o músculo, que dá movimento ao corpo.

### Imagens
Para adicionar uma imagem é parecido com o link, porém deve-se adicionar uma ! antes do \[](). Onde [] é escrito o texto da imagem, caso ela não seja carregada, e () é escrito o link da imagem. exemplo:

\!\[desenho de uma paisagem montanhosa](https://img.freepik.com/vetores-gratis/desenho-plano-desenhado-a-mao-paisagem-montanhosa_52683-79195.jpg)

![desenho de uma paisagem montanhosa](https://img.freepik.com/vetores-gratis/desenho-plano-desenhado-a-mao-paisagem-montanhosa_52683-79195.jpg)
        