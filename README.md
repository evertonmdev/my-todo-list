# Projeto Fullstack com Next.js, Prisma, Express e Socket.io

Bem-vindo ao repositório do meu projeto fullstack! Este projeto utiliza uma stack moderna e eficiente, combinando tecnologias no frontend e no backend para criar uma aplicação robusta e escalável.

**obs: eu estou usando o render como hospendagem para o backend, mas o serviço é gratuito e um pouco lento... após fazer o cadastro na plataforma ( todo ) aguarde alguns segundos até aparecer uma notificação de conta criada, ai você poderá prosseguir.**

## Tecnologias Utilizadas

### Frontend

- **Next.js (TypeScript):** O frontend é desenvolvido utilizando Next.js, um framework React que permite construir aplicações web modernas e escaláveis. TypeScript é integrado para proporcionar tipagem estática e melhorar a manutenibilidade do código.

- **Tailwind CSS:** Para estilização, optei pelo Tailwind CSS devido à sua abordagem utility-first, proporcionando flexibilidade e eficiência no desenvolvimento de estilos.

- **Framer Motion:** Adicionei animações elegantes utilizando Framer Motion para melhorar a experiência do usuário.

### Backend

- **Prisma:** Utilizei Prisma como ORM para interagir com o banco de dados SQLite3. Ele oferece uma interface de banco de dados declarativa, facilitando a manipulação de dados e consultas.

- **Express:** O backend é construído com Express, um framework Node.js que facilita a criação de APIs robustas e escaláveis.

- **Node.js (TypeScript):** O backend é desenvolvido em Node.js, e o TypeScript é utilizado para garantir maior segurança e clareza no código.

- **JWT (JSON Web Token) e Bcrypt:** Implementei métodos de autenticação utilizando JWT para criar tokens seguros e Bcrypt para o armazenamento seguro das senhas no banco de dados.

### Funcionalidades Futuras

- **Socket.io:** Planejo adicionar funcionalidades em tempo real utilizando a biblioteca Socket.io para proporcionar uma experiência mais dinâmica aos usuários.

# Ambiente de Instalação

## 1. Frontend

### Clone o Repositório

```bash
git clone https://github.com/evertonmdev/my-todo-list.git
```

### Acesse a Pasta do Frontend

```bash
cd my-todo-list/frontend-todo-mgtk
```

### Instale as Dependências

```bash
npm install
```

### Construa a Aplicação

```bash
npm run build
```

### Inicie o Servidor

```bash
npm run start
```

Parabéns! Seu frontend está funcionando. No entanto, sem o backend, algumas funcionalidades podem não estar disponíveis.

## 2. Backend

### Clone o Repositório

```bash
git clone https://github.com/evertonmdev/my-todo-list.git
```

### Acesse a Pasta do Backend

```bash
cd my-todo-list/backend-todo-mgtk
```

### Instale as Dependências

```bash
npm install
```

### Configure o Banco de Dados

Crie um arquivo `.env` na pasta `backend-todo-mgtk` e adicione as seguintes variáveis:

```env
DATABASE_URL="file:./dev.db"
JWT_SECRET=sua-chave-aqui
```

### Execute as Migrações do Prisma

```bash
npx prisma migrate deploy
```

### Construa o Projeto

```bash
npm run build
```

### Inicie o Servidor

```bash
npm run start
```

Parabéns! A aplicação está rodando. O frontend provavelmente está acessível em [http://localhost:3000](http://localhost:3000) e o backend em [http://localhost:3002](http://localhost:3002). Certifique-se de ajustar as portas conforme necessário no arquivo de configuração.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
