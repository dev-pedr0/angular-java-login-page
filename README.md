# Projeto Fullstack - Login (Angular + Java)

Este projeto é uma aplicação fullstack com sistema de login, composta por:
- Frontend em Angular (reutilizável)
- Backend em Java com Spring Boot

A tela de login foi desenvolvida com foco em reaproveitamento e modularização, permitindo ser utilizada em diferentes projetos.

## Tecnologias do frontend:
- Angular 21
- typescript
- HTML
- SCSS

## Funcionamento
O sistema roda em http://localhost:4200 e possui as rotas:
- /: direciona direto para /login
- /login
- /register
- /user: tela de teste para garantir que o usuário fez login corretamente

## Utilização
Requisitos:
- Node.js
- Angular CLI

Clone o projeto, instale as dependencias e rode: 
```
git clone https://github.com/dev-pedr0/angular-java-login-page 
npm install
npm run start
```

## Backend
O backend pode ser encontrado [aqui](https://github.com/dev-pedr0/angular-java-api).
