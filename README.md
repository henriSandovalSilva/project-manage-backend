Primeiro você precisa executar o POSTGRESQL através do comando:

`docker run --name postgres-project -e POSTGRES_PASSWORD=postgres-project -p 5432:5432 -d postgres`

Depois execute no terminal:

Este comando baixa as dependências do projeto.<br>
`yarn`

Cria o banco de dados.<br>
`yarn sequelize db:create`

Executa as migrations.<br>
`yarn sequelize db:migrate`

Executa todas as seeds.<br>
`yarn sequelize db:seed:all`

Executa o projeto.<br>
`yarn dev`<br>

A API irá executar em: [http://localhost:3333](http://localhost:3333)
