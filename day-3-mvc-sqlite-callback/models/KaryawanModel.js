const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./amil-zakat.db');

class KaryawanModel {
    static create(username, password, role, callback) {
        let query = `INSERT INTO karyawan (username, password, role) VALUES ('${username}', '${password}', '${role}')`;
        db.run(query, (err) => {
            if (err) callback(err)
            else {
                callback(null, 'data saved');
            }
        });
    }

    static loginCheck(username, password, callback) {
        let query = `SELECT * FROM karyawan WHERE username = '${username}' AND password = '${password}'`;
        db.get(query, (err, row) => {
            if (err) callback(err)
            else {
                if(row){
                    callback(null, row);
                    console.log(`${row.username} logged in`);
                } else {
                    callback('not found')
                }
            }
        });
    }
}

module.exports = KaryawanModel