const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./amil-zakat.db');

class KaryawanModel {
    static createMuzakki(nama, amanah, callback) {
        let query = `INSERT INTO muzakki (nama, amanah) VALUES ('${nama}', '${amanah}')`;
        db.run(query, (err) => {
            if (err) callback(err)
            else {
                callback(null, 'data saved');
            }
        });
    }
}

module.exports = KaryawanModel