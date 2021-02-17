var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('amil-zakat.db');

db.serialize(function() {
    db.run(`CREATE TABLE IF NOT EXISTS karyawan (
                username TEXT NOT NULL,
                password TEXT NOT NULL,
                role TEXT NOT NULL
                );
            `);
    db.run(`CREATE TABLE IF NOT EXISTS muzakki (
                nama TEXT NOT NULL,
                amanah TEXT NOT NULL
                );
            `);
});

db.close();