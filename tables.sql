-- Active: 1663287797891@@35.226.146.116@3306@hooks-4313469-maximiliano-araujo
CREATE TABLE IF NOT EXISTS Ew_users (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(64) NOT NULL
);

CREATE TABLE IF NOT EXISTS Ew_users_account (
    id_user VARCHAR(64),
    FOREIGN KEY (id_user) REFERENCES Ew_users(id),
    balance DECIMAL (8,2) NOT NULL
);

CREATE TABLE IF NOT EXISTS Ew_users_transaction (
    id_transaction VARCHAR(64) PRIMARY KEY,
    id_user VARCHAR(64),
    FOREIGN KEY (id_user) REFERENCES Ew_users(id),
    price DECIMAL (8,2),
    title VARCHAR(255) NOT NULL,
    description VARCHAR (255),
    date DATETIME     
);

