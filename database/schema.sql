-- =============================================
-- SAKUM DATABASE
-- =============================================

CREATE TABLE users (
    id SERIAL PRIMARY KEY,

    name VARCHAR(100) NOT NULL,

    email VARCHAR(255) UNIQUE NOT NULL,

    password_hash TEXT NOT NULL,

    profile_photo TEXT,

    created_at TIMESTAMPTZ
        NOT NULL DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMPTZ
        NOT NULL DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE trips (
    id SERIAL PRIMARY KEY,

    user_id INTEGER NOT NULL
        REFERENCES users(id)
        ON DELETE CASCADE,

    name VARCHAR(150) NOT NULL,

    destination VARCHAR(200) NOT NULL,

    start_date DATE,

    end_date DATE,

    budget NUMERIC(12, 2)
        DEFAULT 0,

    created_at TIMESTAMPTZ
        NOT NULL DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMPTZ
        NOT NULL DEFAULT CURRENT_TIMESTAMP
);