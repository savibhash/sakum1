-- SAKUM migration: feedback and newsletter interest
-- Run this against the existing sakum_db database after database/schema.sql
CREATE TABLE IF NOT EXISTS feedback (
    id BIGSERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE
    SET NULL,
        category VARCHAR(30) NOT NULL CHECK (
            category IN (
                'design',
                'destinations',
                'trips',
                'journal',
                'bug',
                'suggestion',
                'other'
            )
        ),
        rating SMALLINT NOT NULL CHECK (
            rating BETWEEN 1 AND 5
        ),
        message TEXT NOT NULL CHECK (
            char_length(btrim(message)) BETWEEN 10 AND 2000
        ),
        created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS idx_feedback_created_at ON feedback (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_feedback_user_id ON feedback (user_id);
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
    id BIGSERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    consented_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    unsubscribed_at TIMESTAMPTZ
);