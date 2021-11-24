-- SQL Shell psql (It's probably best with pgAdmin)

DROP DATABASE IF EXISTS codegig;

CREATE DATABASE codegig;

-- Connect to codegig if not already
-- \c codegig;

DROP TABLE IF EXISTS gigs;

CREATE TABLE gigs (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    technologies VARCHAR(255),
    budget VARCHAR(255),
    description VARCHAR(255),
    contact_email VARCHAR(255),
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX gigs_technologies_idx ON gigs(technologies);

INSERT INTO gigs (title, technologies, budget, description, contact_email)
VALUES ('Full Stack Developer', 'laravel,php,vue.js,javascript', '$10000', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'bob@test.com');
