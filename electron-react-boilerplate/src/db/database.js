const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 'weather_history.db');

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Could not connect to database', err);
  } else {
    console.log('Connected to database');
    db.run(`CREATE TABLE IF NOT EXISTS history (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      city_name TEXT,
      timestamp TEXT
    )`);
  }
});

const insertHistory = (cityName) => {
  const timestamp = new Date().toISOString();
  db.run(`INSERT INTO history (city_name, timestamp) VALUES (?, ?)`, [cityName, timestamp], (err) => {
    if (err) {
      console.error('Error inserting data', err);
    }
  });
};

module.exports = {
  insertHistory,
  db
};
