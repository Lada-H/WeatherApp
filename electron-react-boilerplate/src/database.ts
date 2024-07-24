const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('weather_history.db');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS history (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    city TEXT,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);
});

function saveSearch(city: string) {
  db.run('INSERT INTO history (city) VALUES (?)', [city]);
}

export { saveSearch, db };
