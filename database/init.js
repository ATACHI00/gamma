import Database from "better-sqlite3";

const db = new Database("database/database.db");

db.exec(`
  CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    customerName TEXT,
    customerContact TEXT,
    title TEXT,
    describe TEXT,
    price INTEGER
  )
`);

export default db;
