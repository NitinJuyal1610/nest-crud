# NESTjs Prisma CRUD Application

## Introduction

This project is a basic NESTjs application that manages a PostgreSQL database with two tables: `Users` and `WalletAddress`. It implements CRUD operations for these tables using Prisma as the ORM.

## Prerequisites

- Node.js (v14 or later)
- Docker
- NPM or Yarn

## Setup Instructions

### 1. Clone the Repository

```bash
  git clone https://github.com/your-username/your-repository.git
```


### 2. Install dependencies:
 ```bash
 cd your-repository
 npm install
 ```

### 3. Configure environment variables

```bash
  cp .env.stage.dev.example .env.stage.dev

  DB_HOST=
  DB_USERNAME=
  DB_PASSWORD=
  DB_DATABASE=
  DB_PORT=5432
```

### 4. Start the Postgres DB

```bash
 docker run --name my_postgres_container -e POSTGRES_PASSWORD=mypassword -e POSTGRES_USER=myuser -p 5432:5432 -d postgres
```

### 5. Run the application

```bash
  npm run start:dev

```

## Usage
  Import postman collection 'catoff.postman_collection.json' and run it locally.

