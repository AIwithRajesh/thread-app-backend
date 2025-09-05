# Node.js + GraphQL + Prisma + PostgreSQL (Docker Setup)

This project is a starter template using:

- **Node.js** (backend runtime)
- **GraphQL (Apollo Server)** for API
- **Prisma ORM** for database queries
- **PostgreSQL** running in **Docker Compose**

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd <your-project-folder>

### 2. Install the dependencies
yarn

🐘 PostgreSQL with Docker Compose
1. Start PostgreSQL
Make sure you have Docker and Docker Compose installed.

docker compose up -d

2. Verify container is running
docker ps

3. Database credentials (default)
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DB=appdb
PORT=5432

Prisma Setup
1. Initialize Prisma
npx prisma init

2. Update DATABASE_URL
Inside .env:
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/appdb?schema=public"

3. Run migrations
npx prisma migrate dev --name init
```

⚡ Run GraphQL Server
yarn dev

📂 Project Structure
├── docker-compose.yml
├── package.json
├── prisma/
│ └── schema.prisma
├── src/
│ ├── index.ts # Entry point
│ ├── graphql/ # GraphQL resolvers
│ ├── services/ # GraphQL schema
│ └── lib/
│ └── db.ts # Prisma client
└── README.md
