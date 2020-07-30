<h1 align="center">Noderest</h1>
<p align="center">
  <img src="https://img.shields.io/badge/NPM-v6.14.4-red" />
  <img src="https://img.shields.io/badge/NodeJs-v12.16.2-green" />
  <img src="https://img.shields.io/badge/Express-v4.17.1-lightgrey" />
  <img src="https://img.shields.io/badge/MongoDB-v4.2.8-lightgreen" />
  <img src="https://img.shields.io/badge/Mongoose-v5.9.26-lightgrey" />
</p>

## Tabela de Conteúdo

- [Tabela de Conteúdo](#tabela-de-conte%C3%BAdo)
- [Sobre o Projeto](#sobre-o-projeto)
  - [Feito Com](#feito-com)
- [Começando](#come%C3%A7ando)
  - [Pré-requisitos](#pr%C3%A9-requisitos)
  - [Estrutura de Arquivos](#estrutura-de-arquivos)
  - [Instalação](#instala%C3%A7%C3%A3o)
  - [Rodando a aplicação](#rodando-a-aplica%C3%A7%C3%A3o)
- [Contribuição](#contribui%C3%A7%C3%A3o)
- [Contato](#contato)

## Sobre o Projeto

Este projeto visa a criação de uma API REST com NodeJS, Express e MongoDB.

### Feito Com

Abaixo segue o que foi utilizado na criação deste projeto:

- [Visual Studio Code](https://code.visualstudio.com/) - O Visual Studio Code é um editor de código-fonte desenvolvido pela Microsoft para Windows, Linux e macOS. Ele inclui suporte para depuração, controle Git incorporado, realce de sintaxe, complementação inteligente de código, snippets e refatoração de código.
- [NPM](https://www.npmjs.com/) - O npm é um gerenciador de pacotes para a linguagem de programação JavaScript. É o gerenciador de pacotes padrão para o ambiente de tempo de execução JavaScript Node.js.
- [Node.js](https://nodejs.org/en/) - Node.js é um interpretador de JavaScript assíncrono com código aberto orientado a eventos, criado por Ryan Dahl em 2009, focado em migrar a programação do Javascript do cliente (frontend) para os servidores, criando aplicações de alta escalabilidade (como um servidor web), manipulando milhares de conexões/eventos simultâneas em tempo real numa única máquina física.
- [Express](https://expressjs.com/pt-br/) - O Express.js, ou simplesmente o Express, é uma estrutura de aplicativo da Web para o Node.js, lançada como software livre e de código aberto sob a Licença MIT. Ele foi projetado para criar aplicativos da Web e APIs. Foi chamado de estrutura de servidor padrão de fato para o Node.js.
- [MongoDB](https://www.mongodb.com/) - MongoDB é um software de banco de dados orientado a documentos livre, de código aberto e multiplataforma, escrito na linguagem C++. Classificado como um programa de banco de dados NoSQL, o MongoDB usa documentos semelhantes a JSON com esquemas. 
- [Mongoose](https://mongoosejs.com/) - Mongoose é uma ferramenta de modelagem de objeto MongoDB projetada para funcionar em um ambiente assíncrono. Suporta promessas e retornos de chamada. Como também, fornece uma solução direta e baseada em esquema para modelar os dados do aplicativo. Ele inclui conversão de tipo incorporada, validação, criação de consultas, ganchos de lógica de negócios e muito mais, prontos para uso.

## Começando

Para conseguir utilizar ou visualizar o projeto, seja através do Visual Studio Code ou outro editor de código, siga os passos abaixo:

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/get-npm)
- [VSCode](https://code.visualstudio.com/)
- [MongoDB](https://docs.mongodb.com/manual/administration/install-community/)

### Estrutura de Arquivos

A estrutura de arquivos está da seguinte maneira:

```bash
noderest
├── bin/  
│   └── server.js
│   src/
│   ├── controllers/
│   │   └── productController.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── index.js
│   │   └── product.js
│   ├── app.js
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

### Instalação

- Para instalar esse projeto, o processo é bem simples. Basta utilizar os seguintes comandos no terminal:

```bash
# Clone este repositório
$ git clone https://github.com/MTevangelista/noderest.git

# Acesse a pasta do projeto no terminal/cmd
$ cd noderest

# Instale as dependências
$ npm install 
```

### Rodando a Aplicação

- Para utilizar esse projeto, o processo é bem simples. Após ter instalado, basta utilizar os seguintes comandos no terminal:

```bash
# Execute a aplicação em modo de desenvolvimento
$ npm run start

# O servidor inciará na porta: 3000 - acesse http://localhost:3000 
```

---

## Contribuição

Contribuições são o que fazem a comunidade open source um lugar incrível para aprender, inspirar e criar. Qualquer contribuição que você fizer será **muito apreciada**.

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/FeatureIncrivel`)
3. Adicione suas mudanças (`git add .`)
4. Comite suas mudanças (`git commit -m 'Adicionando uma Feature incrível!`)
5. Faça o Push da Branch (`git push origin feature/FeatureIncrivel`)
6. Abra um Pull Request

## Contato

👤  **Matheus Evangelista**

[![Github Badge](https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link=https://github.com/MTevangelista)](https://github.com/MTevangelista)
[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/matheus01/)](https://www.linkedin.com/in/matheus01/)
[![Gmail Badge](https://img.shields.io/badge/-Gmail-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:matheusevangelistadev@gmail.com)](mailto:matheusevangelistadev@gmail.com)
[![Instagram Badge](https://img.shields.io/badge/-Instagram-ba164a?style=flat-square&logo=Instagram&logoColor=white&link=https://www.instagram.com/_matheusrj/?hl=pt-br)](https://www.instagram.com/_matheusrj/?hl=pt-br)
