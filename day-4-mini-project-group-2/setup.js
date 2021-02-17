var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db.db');

db.serialize(function() {
  db.run(`CREATE TABLE IF NOT EXISTS kader (
            id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL,
            pass TEXT NOT NULL,
            univ TEXT NOT NULL,
            jurusan TEXT NOT NULL
          );`
        );

  db.run(`CREATE TABLE IF NOT EXISTS program (
            id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            nama_program TEXT NOT NULL
          );`
        );

  db.run(`CREATE TABLE IF NOT EXISTS organisasi (
            id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            nama_organisasi TEXT NOT NULL,
            id_kader INTEGER NOT NULL,
            FOREIGN KEY (id_kader)
              REFERENCES kader(id)
          );`
        );

  db.run(`CREATE TABLE IF NOT EXISTS trx_kader_program (
            id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            id_kader INTEGER NOT NULL,
            id_program INTEGER NOT NULL,
            FOREIGN KEY (id_program)
              REFERENCES program(id)
            FOREIGN KEY (id_kader)
              REFERENCES kader(id)
          );`
        );
});

db.close();