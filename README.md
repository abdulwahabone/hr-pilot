# HR Boleh

A practice HR SaaS app built with Next.js. One landing page, a simple login, and a dashboard with
four modules: **Leaves**, **Payroll**, **Claims**, and **Settings** - seeded with an admin account
and a 20-person software company.

## Tech stack

- **Next.js 16** (App Router) with TypeScript - a single app serving both the frontend and the
  backend (via Route Handlers under `app/api`).
- **Tailwind CSS** + **shadcn/ui** (built on Base UI) for the interface.
- **Prisma ORM + SQLite** (`@prisma/adapter-better-sqlite3`) for persistence.
- **bcryptjs** for password hashing and a simple DB-backed session cookie for auth (no third-party
  auth provider - this is intentionally simple since it's a practice project).

## Getting started

Install dependencies:

```bash
npm install
```

Set up the database (creates `dev.db` and applies the schema):

```bash
npx prisma migrate dev
```

Seed the database with an admin account, 20 employees, and sample leave/claim/payroll data:

```bash
npm run seed
```

Start the dev server:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

> Re-running `npm run seed` at any time will wipe and regenerate all data back to a clean demo
> state.

## Demo credentials

This app uses simple, practice-only authentication - there is no email verification, OAuth, or
password reset flow. Credentials are shown right on the login page too.

| Role     | Username     | Password      |
| -------- | ------------ | ------------- |
| Admin/HR | `admin`      | `admin`       |
| Employee | `ahmad.faiz` | `password123` |

All 20 seeded employees share the password `password123`, with usernames in `firstname.lastname`
format (e.g. `wei.jian`, `priya.sharma`, `farah.aziz` - see `prisma/seed.ts` for the full list).

## Modules

- **Leaves** - apply for annual/sick/unpaid leave, track your balance, and (as Admin) approve or
  reject requests from the whole team.
- **Payroll** - view your monthly payslips with a full breakdown of basic salary, allowances, and
  deductions. Admins can also view payroll for every employee.
- **Claims** - submit expense claims (food, travel, medical, other) and track their approval
  status. Admins approve or reject claims from the team.
- **Settings** - update your name/email and change your password.

Only the `ADMIN` role can approve or reject leave requests and claims; regular employees can only
manage their own.

## Project structure

```
app/
  page.tsx                 Landing page
  login/page.tsx           Login page
  dashboard/                Protected dashboard (layout + 4 module pages)
  api/                      Route handlers (auth, leaves, claims, payroll, settings)
components/                Shared UI (shadcn/ui primitives + feature components)
lib/                        Auth, Prisma client, formatting, and other shared helpers
prisma/
  schema.prisma             Data model
  seed.ts                   Seed script (admin + 20 employees + sample records)
proxy.ts                    Route protection for /dashboard/**
```

## Notes

- Route protection is a two-layer check: `proxy.ts` redirects to `/login` when there's no session
  cookie, and each dashboard page/API route re-validates the session and role server-side.
- The SQLite database file (`dev.db`) is gitignored - run the migrate + seed commands above after
  cloning to get a working local database.
