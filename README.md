# App

GymPass Style App

API RESTfull com NodeJS, com uso de frameworks e bibliotecas externas.

Neste projeto foram utilizados:
- `Fastify`
- `TypeScript`
- `ESLint`
- `Prisma`
- `Zod`
- `Postgres`
- `Docker`
- `Testes E2E e Unitários com Vitest`
- `JWT`

## 💻 Pré-requisitos

Para rodar o projeto é necessário ter instalado:

- `NodeJS`
- `Npm`
- `Insomnia` ou similares


## 🚩 Instalando Dependências

Para instalar as dependências da aplicação, execute:

```
npm install
```


## 📜 Migrations

Para executar as migrations, execute:

```
npx prisma migrate dev
```

## 🚀 Executando

Para rodar a aplicação, execute:

```
npm run dev
```

## 🚦 Testes

Para rodar os testes unitários da aplicação, execute:

```
npm test
```

Para rodar os testes E2E da aplicação, execute:

```
npm test:e2e
```

## 💾 Arquivos

O arquivo `Insomnia_2024_02_16.json`, na raiz do projeto, é para a importação das rotas desta API no Insomnia.



## RFs
- [x] Deve ser possível se cadastrar
- [x] Deve ser possível se autenticar
- [x] Deve ser possível obter o perfil de um usuário logado
- [x] Deve ser possível obter o número de check-ins realizados pelo usuário logado
- [x] Deve ser possível o usuário obter seu histórico de check-ins
- [x] Deve ser possível o usuário buscar academias próximas (até 10km)
- [x] Deve ser possível o usuário buscar academias pelo nome
- [x] Deve ser possível o usuário realizar check-in em uma academia
- [x] Deve ser possível validar o check-in de um usuário
- [x] Deve ser possível cadastrar uma academia

## RNs
- [x] O usuário não deve poder se cadastrar com um e-mail duplicado
- [x] O usuário não pode fazer 2 check-ins no mesmo dia
- [x] O usuário não pode fazer check-in se não estiver perto (100m) da academia
- [x] O check-in só pode ser validado até 20 minutos após criado
- [x] O check-in só pode ser validado por administradores
- [x] A academia só pode ser cadastrada por administradores

## RNFs
- [x] A senha do usuário precisa estar criptografada
- [x] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL
- [x] Todas listas de dados precisam estar paginadas com 20 itens por página
- [x] O usuário deve ser identificado por um JWT (Json Web Token)