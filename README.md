# SAKUM — Travel Journal & Trip Planner 🌍

**Plan. Travel. Remember.**

SAKUM is a travel-journal and trip-planning web application designed to help travellers discover destinations, organize journeys, and keep their travel details and memories together in one workspace.

> **Project status:** Active development. Some features are connected to the Express/PostgreSQL authentication backend, while several workspace records are currently saved in the browser. See [Data storage and current limitations](#data-storage-and-current-limitations).

---

## Contents

- [What SAKUM does](#what-sakum-does)
- [Features](#features)
- [Technology stack](#technology-stack)
- [Project structure](#project-structure)
- [Run SAKUM locally](#run-sakum-locally)
- [Environment configuration](#environment-configuration)
- [Authentication API](#authentication-api)
- [Data storage and current limitations](#data-storage-and-current-limitations)
- [Troubleshooting](#troubleshooting)
- [Security notes](#security-notes)
- [Roadmap](#roadmap)
- [Contributing](#contributing)

## What SAKUM does

SAKUM brings public destination discovery and a personal travel workspace into one responsive website. Visitors can browse travel inspiration and destination guides. Registered users can sign in and access planning tools such as trips, itineraries, journals, notes, tickets, saved places, budgets, profile details, and settings.

The project is being built with standard HTML, CSS, and JavaScript on the frontend, with a Node.js/Express server and PostgreSQL database foundation for account authentication.

## Features

### Destination discovery

- Public homepage with travel-inspired navigation and featured destinations.
- Destination search and destination-specific guide pages.
- Destination imagery stored in the project’s assets folders.
- Travel search form for destination, date, and budget.

### Account and session flow

- Registration and login forms connected to the Express API.
- Server-side session checking through the `/api/auth/me` endpoint.
- Logout through the `/api/auth/logout` endpoint.
- Homepage navigation that can reflect whether a visitor has an active session.

### Personal workspace

The dashboard currently includes interfaces for:

- Dashboard overview and trip statistics
- My Trips
- Itinerary
- Travel journal entries
- Notes
- Tickets and travel documents
- Saved Places
- Budget tracking
- Profile and profile photo
- Settings

Some workspace functions are still being developed; their current storage behavior is described below.

## Technology stack

| Area | Technology |
|---|---|
| Frontend | HTML5, CSS3, vanilla JavaScript |
| Server | Node.js, Express |
| Authentication/session | `express-session` |
| Database driver | `pg` (node-postgres) |
| Configuration | `dotenv` |
| Password hashing dependency | `bcrypt` |
| Database | PostgreSQL |
| Local development | VS Code and a browser |

## Project structure

```text
sakum1/
├── assets/
│   └── destinations/       # Local destination photographs
├── dashboard/
│   ├── dashboard.html      # Workspace markup
│   ├── dashboard.css       # Workspace styling
│   └── dashboard.js        # Workspace interactions
├── database/
│   └── schema.sql          # PostgreSQL table definitions
├── pages/
│   ├── destination.html    # Destination guide
│   ├── journal.html        # Journal page
│   ├── login.html          # Login page
│   ├── profile.html        # Profile page
│   ├── register.html       # Registration page
│   ├── search.html         # Destination search/results
│   └── trips.html          # Trips page
├── server/
│   ├── db.js               # PostgreSQL connection setup
│   ├── server.js           # Express server and API routes
│   └── .env                # Local secrets/configuration (do not commit)
├── index.html              # Public homepage and workspace shell
├── script.js               # Homepage interactions and authentication flow
├── search.js               # Destination catalogue/search interactions
├── style.css               # Main site stylesheet
├── travel-nav.jpg          # Navigation artwork
├── travel.png              # Site icon
├── package.json
├── package-lock.json
└── README.md
```

File names can change as development progresses. Check the actual folders in your checkout if your version differs from this outline.

## Run SAKUM locally

### Prerequisites

Install the following before starting:

1. **Node.js** (which includes npm).
2. **PostgreSQL** and access to a local database account.
3. **Git**, if cloning the repository.

### 1. Get the code

If you have access to the GitHub repository:

```bash
git clone https://github.com/savibhash/sakum1.git
cd sakum1
```

If the repository is private, GitHub will require an account with access to it. Alternatively, open your existing local project folder in VS Code.

### 2. Install Node dependencies

Run this from the project root—the folder containing `package.json`:

```bash
npm install
```

If you see `Cannot find module 'express'`, confirm that the terminal is in the project root and run `npm install` there.

### 3. Create the PostgreSQL database

Start PostgreSQL, then create the database if it does not already exist:

```bash
psql -U postgres -c "CREATE DATABASE sakum_db;"
```

Apply the schema from the project root:

```bash
psql -U postgres -d sakum_db -f "database/schema.sql"
```

If `sakum_db` already exists, skip the create command. If `psql` is not recognized in PowerShell, open **SQL Shell (psql)** from the PostgreSQL Start Menu folder, or use the full path to PostgreSQL’s `psql.exe`.

### 4. Configure the environment

Create or update `server/.env` with your local PostgreSQL connection values and a long, private session secret. The variable names in `.env` must match the names read by `server/db.js` and `server/server.js`.

A typical configuration contains values for:

```dotenv
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=sakum_db
DB_USER=postgres
DB_PASSWORD=replace_with_your_local_postgres_password
SESSION_SECRET=replace_with_a_long_random_secret
```

**Important:** this is a template, not a guarantee of the variable names used by every version of the code. If the names in your `db.js` or `server.js` differ, use the names those files expect. Never publish real passwords or session secrets.

### 5. Start the Express server

Run this from the project root:

```bash
node server/server.js
```

Keep the terminal open while using the site. If the server reports an error, read the first error message; it usually identifies a missing dependency, database connection issue, or configuration value.

### 6. Open the website

Visit:

**http://localhost:3000/index.html**

Use the Express server on port `3000` for authentication and database-backed routes. Opening the files through VS Code Live Server on port `5500` is not equivalent: that serves static files and will not run the Express API on port `3000`.

## Environment configuration

- Keep local secrets in `server/.env`.
- Ensure `.env` files are excluded from Git before pushing changes.
- Do not paste database passwords, session secrets, or other credentials into issues, commits, screenshots, or public documentation.
- For a deployment, configure environment variables through the hosting provider’s secret manager rather than committing a `.env` file.

## Authentication API

The frontend currently calls the following server endpoints:

| Method | Endpoint | Purpose |
|---|---|---|
| `POST` | `/api/auth/register` | Create an account |
| `POST` | `/api/auth/login` | Authenticate a user and establish a session |
| `GET` | `/api/auth/me` | Check the active session and return the current user |
| `POST` | `/api/auth/logout` | End the session |

The browser frontend uses the server session as its authentication source. Do not treat a client-side `localStorage` flag as proof that a user is authenticated.

## Data storage and current limitations

SAKUM is still being developed, so not all data currently lives in PostgreSQL.

- **Accounts and authentication:** intended to use the Express session and PostgreSQL user records.
- **Workspace entries:** the current dashboard JavaScript stores several items in browser `localStorage`, using keys such as `sakumTrips`, `sakumItinerary`, `sakumJournals`, `sakumNotes`, `sakumTickets`, and `sakumSavedPlaces`.
- **Profile photo:** the current dashboard stores the selected photo in browser storage under `sakumProfilePhoto`.
- **Implication:** data saved in browser storage belongs to that browser profile and origin. It does not automatically sync to another device or browser, and clearing site data can remove it.
- **Global place search:** SAKUM currently uses its local destination catalogue/pages. A live worldwide places provider has not been integrated yet.

These are known development limitations, not guarantees of cloud backup. A future improvement is to add authenticated API routes and PostgreSQL tables for workspace records and profile images.

## Troubleshooting

### `Error: Cannot find module 'express'`

Run `npm install` from the root folder that contains `package.json`, then restart the server.

### `secret option required for sessions`

The server's session middleware is missing a session secret. Add the expected session-secret variable to `server/.env`, make sure `server.js` reads the same variable name, and restart Node.js.

### PostgreSQL connection fails

Check that PostgreSQL is running, the database exists, `database/schema.sql` has been applied, and the connection values in `server/.env` match your local PostgreSQL credentials.

### The page loads, but login or registration fails

Confirm that you opened `http://localhost:3000/index.html`, the Express server is still running, and the browser console/terminal does not show API or database errors.

### Destination images are missing

Confirm the image exists at the path in the repository and that the path is relative to the page URL. For example, a homepage image may use `assets/destinations/manali.jpg`, while a page located inside `pages/` may need `../assets/destinations/manali.jpg`.

### A change does not appear in Chrome

Save the file, then hard-refresh with **Ctrl + Shift + R**. Also check that you edited the same project folder served by the running server.

## Security notes

SAKUM is a work in progress and should not be considered production-ready without additional review. Before a public deployment:

- Use HTTPS and secure session-cookie settings.
- Use a strong, unique session secret stored outside source control.
- Validate and sanitize incoming data on the server.
- Apply appropriate request limits and error handling to authentication routes.
- Confirm password hashing and verification are implemented correctly in the backend.
- Add authorization checks to every private API route.
- Move user-owned workspace records from browser storage to server-side storage if cross-device access and reliable backup are required.
- Review photo-upload size/type validation and storage if uploads move to the server.
- Add automated tests, database migrations/backups, and production logging.

## Roadmap

- [ ] Make trip, itinerary, journal, note, ticket, saved-place, and budget records persist in PostgreSQL per user.
- [ ] Store profile photos through a validated upload flow or an appropriate image-storage service.
- [ ] Improve destination search and filtering; evaluate a global places provider when needed.
- [ ] Add reliable empty, loading, success, and error states throughout the interface.
- [ ] Add automated tests for authentication, authorization, and core workspace flows.
- [ ] Prepare deployment configuration, accessibility checks, and responsive-layout testing.

## Contributing

SAKUM is actively evolving. To work on it locally:

1. Create a branch for your change.
2. Keep secrets and local `.env` files out of commits.
3. Test the affected feature in the browser and check the Node.js terminal for errors.
4. Describe what changed and note any setup or database-schema changes in your pull request.

---

**SAKUM — Plan. Travel. Remember.** ✈️
