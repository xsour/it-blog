# IT Blog

Контентний вебзастосунок про розробку, інфраструктуру, безпеку та сучасні інструменти.

## Технології

- Frontend: Next.js (App Router, SSR/SSG)
- Backend: Node.js + Express
- База даних: PostgreSQL

## Структура

- `apps/frontend`
- `apps/backend`
- `.env.example`

## Основні маршрути

- `/`
- `/articles/[slug]`
- `/categories/[slug]`
- `/authors/[slug]`
- `/tags/[slug]`
- `/search?q=...`
- `/admin`

Приклади категорій:
- `/categories/javascript-frontend`
- `/categories/backend-devops`
- `/categories/ai-ml`

## Локальний запуск

```bash
cp .env.example .env
npm install
npm run dev
```

## Запуск через Docker

```bash
docker compose up --build
```
