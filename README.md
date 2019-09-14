# ProjectManage - Backend

## Tecnologias utilizadas
- Express.js;
- PostgreSQL
- ORM Sequelize
- Autenticação JWT
- ESLint + Prettier + EditorConfig;

## Instruções para testar o projeto

Primeiro você precisa executar o POSTGRESQL através do comando:

`docker run --name postgres-project -e POSTGRES_PASSWORD=postgres-project -p 5432:5432 -d postgres`

Depois execute no terminal:

**Baixe as dependências do projeto.**<br>
`yarn`

**Crie o banco de dados.**<br>
`yarn sequelize db:create`

**Execute as migrations.**<br>
`yarn sequelize db:migrate`

**Execute todas as seeds.**<br>
`yarn sequelize db:seed:all`

**Execute o projeto.**<br>
`yarn dev`<br>

A API irá executar em: [http://localhost:3333](http://localhost:3333)
