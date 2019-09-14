Primeiro você precisa executar o POSTGRESQL através do comando:

### `docker run --name postgres-project -e POSTGRES_PASSWORD=postgres-project -p 5432:5432 -d postgres`

Depois execute no terminal:

### `yarn`

Este comando baixa as dependências do projeto.

### `yarn dev`

A API irá executar em: [http://localhost:3333](http://localhost:3333)
