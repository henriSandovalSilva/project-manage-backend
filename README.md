<h1 align="center">
    <img alt="Node" title="Node" src="https://nodejs.org/static/images/logos/nodejs-new-black.svg" width="150px" />
</h1>

<h2>:rocket: Tecnologias utilizadas</h2>
<ul>
  <li>Node.js</li>
  <li>Express.js</li>
  <li>PostgreSQL</li>
  <li>ORM Sequelize</li>
  <li>Autenticação JWT</li>
  <li>Docker</li>
  <li>ESLint + Prettier + EditorConfig</li>
</ul>

<h2>💻 Projeto</h2>

Aplicação web que gerencia a alocação de profissionais em projetos. O objetivo do sistema deve ser controlar as horas trabalhadas do profissional em cada projeto, ou seja, cada profissional deverá ter a possibilidade de registrar quantas horas e em qual projeto trabalhou.

<h2>:question: Instruções para testar o projeto</h2>

Primeiro você precisa executar o POSTGRESQL através do comando:

`docker run --name postgres-project -e POSTGRES_PASSWORD=postgres-project -p 5432:5432 -d postgres`

Depois execute no terminal:

**1. Baixe as dependências do projeto.**<br>
`yarn`

**2. Crie o banco de dados.**<br>
`yarn sequelize db:create`

**3. Execute as migrations.**<br>
`yarn sequelize db:migrate`

**4. Execute todas as seeds.**<br>
`yarn sequelize db:seed:all`

**5. Execute o projeto.**<br>
`yarn dev`<br>

A API irá executar em: [http://localhost:3333](http://localhost:3333)
