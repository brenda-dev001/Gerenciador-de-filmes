# Gerenciador de Filmes

Aplicação web para pesquisar filmes na [OMDb API](https://www.omdbapi.com/), consultar informações como sinopse, elenco e gênero, e montar uma lista pessoal de filmes diretamente no navegador.

O projeto foi desenvolvido para praticar consumo de API, manipulação do DOM, modularização com JavaScript e persistência de dados com `localStorage`.

## Funcionalidades

- Pesquisa de filmes pelo título.
- Filtro opcional pelo ano de lançamento.
- Busca ao clicar no botão ou pressionar `Enter`.
- Exibição dos detalhes do filme em um modal.
- Visualização de título, pôster, sinopse, elenco e gênero.
- Adição de filmes a uma lista pessoal.
- Validação para impedir filmes duplicados.
- Remoção de filmes da lista.
- Persistência dos filmes no navegador com `localStorage`.
- Mensagens de sucesso e erro com Notie.
- Layout responsivo para diferentes tamanhos de tela.

## Tecnologias utilizadas

<p align="left">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript ES6+">
  <img src="https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white" alt="jQuery">
  <img src="https://img.shields.io/badge/OMDb_API-F5C518?style=for-the-badge&logo=imdb&logoColor=black" alt="OMDb API">
  <img src="https://img.shields.io/badge/Notie-333333?style=for-the-badge&logo=javascript&logoColor=white" alt="Notie">
  <img src="https://img.shields.io/badge/Bootstrap_Icons-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap Icons">
  <img src="https://img.shields.io/badge/LocalStorage-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Local Storage API">
</p>

## Como a aplicação funciona

1. O usuário informa o título do filme e, opcionalmente, o ano.
2. A aplicação valida os campos e monta a URL da requisição.
3. Os dados são consultados na OMDb API.
4. As informações recebidas são exibidas em um modal.
5. O usuário pode adicionar o filme à sua lista.
6. A lista é salva no `localStorage` e restaurada ao recarregar a página.

## Estrutura do projeto

```text
Gerenciador-de-filmes/
├── data/
│   └── arquivo.json
├── imagens/
│   └── icons/
│       └── film_favicon.svg
├── scripts/
│   ├── entradas.js
│   ├── key.js
│   ├── listaFilmes.js
│   ├── localStorage.js
│   └── modal.js
├── styles/
│   ├── media-1300.css
│   ├── media-920.css
│   ├── media-750.css
│   ├── media-560.css
│   ├── media-430.css
│   ├── modal.css
│   └── style.css
├── index.html
└── README.md
```

## Responsabilidade dos arquivos JavaScript

| Arquivo | Responsabilidade |
| --- | --- |
| `entradas.js` | Captura os campos, valida os valores e consulta a OMDb API. |
| `modal.js` | Preenche, abre e fecha o modal de detalhes. |
| `listaFilmes.js` | Cria a lista visual, adiciona filmes e processa remoções. |
| `localStorage.js` | Salva e remove os filmes no armazenamento do navegador. |
| `key.js` | Armazena a chave utilizada nas requisições à OMDb API. |

## Pré-requisitos

Para executar o projeto, é necessário ter:

- Um navegador moderno.
- Um servidor local, como Live Server ou o servidor HTTP do Python.

## Executando localmente

Clone o repositório:

```bash
git clone https://github.com/brenda-dev001/Gerenciador-de-filmes.git
```

Entre na pasta do projeto:

```bash
cd Gerenciador-de-filmes
```

Inicie um servidor local. Com Python:

```bash
python -m http.server 8000
```

Em algumas instalações, o comando pode ser:

```bash
python3 -m http.server 8000
```

Depois, abra no navegador:

```text
http://localhost:8000
```

Também é possível abrir o projeto pela extensão **Live Server** do Visual Studio Code.

> O servidor local é necessário porque o projeto utiliza módulos JavaScript com `type="module"`.

## Como usar

1. Digite o nome de um filme no campo **Nome**.
2. Opcionalmente, informe um ano com quatro dígitos.
3. Clique no botão de pesquisa ou pressione `Enter`.
4. Confira os detalhes exibidos no modal.
5. Clique em **Adicionar filme** para salvar o item na sua lista.
6. Use o botão **Remover** para excluir um filme.

## Persistência dos dados

Os filmes adicionados são armazenados no `localStorage`. Isso significa que:

- A lista continua disponível após atualizar ou fechar a página.
- Os dados ficam salvos somente no navegador e dispositivo atuais.
- A limpeza dos dados do navegador remove a lista.
- Não existe sincronização entre dispositivos.

## Validações implementadas

- O nome do filme é obrigatório.
- O ano, quando informado, deve possuir quatro dígitos numéricos.
- Filmes inexistentes geram uma mensagem de erro.
- Um mesmo título não pode ser adicionado duas vezes.

## Autoria

Desenvolvido por [Brenda](https://github.com/brenda-dev001).
