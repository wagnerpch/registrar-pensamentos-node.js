# Registrar Pensamentos usando Node.js
 Registro de pensamentos com autenticação, utilizando Node.Js e MySQL

[![Static Badge](https://img.shields.io/badge/license-GNU-green)](https://github.com/wagnerchc/chess-system-java/blob/master/LICENSE)

# Sobre o projeto

Aplicação backend em Node.Js e MySQL.

Esse projeto foi desenvolvido com base nas aulas da <a href="https://www.udemy.com/course/nodejs-do-zero-a-maestria-com-diversos-projetos/?kw=Node.js+do+Zero+a+Maestria+com+diversos+Projetos&src=sac&couponCode=KEEPLEARNINGBR" target="_blank">Node.js do Zero a Maestria com diversos Projetos
</a>

# Tecnologias utilizadas

## Back end

- Node.Js
- MySQL

## Dependências: 
- Bcryptjs
- Connect-flash
- Cookie-parser
- Cookie-session
- Express
- Express-flash
- Express-handlebars
- Express-session
- Mysql2
- Sequelize
- Session-file-store

# Como executar o projeto

## Back end

Pré-requisitos: Node.Js, MySQL

```bash
# clonar repositório
git clone https://github.com/wagnerpch/registrar-pensamentos-node.js

# acessar a pasta
cd registrar-pensamentos-node.js

# instalar as dependências do projeto
npm install

# executar o projeto
npm run start
```

# Rotas

- Home "Pensamentos" = http://localhost:3000
- Login = http://localhost:3000/login
- Logout = http://localhost:3000/logout
- Registrar = http://localhost:3000/register
- Dashboard = http://localhost:3000/toughts/dashboard
- Adicionar pensamento = http://localhost:3000/toughts/add
- Editar pensamento = http://localhost:3000/toughts/edit/:id
- Deletar pensamento = http://localhost:3000/post/:id

# Autor

Wagner Pereira Chequeleiro

https://www.linkedin.com/in/wagnerpch/

## Contribuição e agradecimento

Projeto desenvolvido a partir da aulas do curso "Node.js do Zero a Maestria com diversos Projetos". 
Agradeço ao professor pela didática e por proporcionar acesso organizado ao mundo do Node.Js.