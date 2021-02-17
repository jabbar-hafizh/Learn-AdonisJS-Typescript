const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db.db');

class ProgramModel {
    static create(nama, callback) {
        let query = `INSERT INTO program (nama_program) VALUES ('${nama}')`;
        db.run(query, (err) => {
            if (err) callback(err)
            else {
                callback(null, 'data saved');
            }
        });
    }

    static allData(callback) {
        let query = `SELECT DISTINCT nama_program nama_program FROM program ORDER BY nama_program`;
        db.all(query, [], (err, rows) => {
            if (err) callback(err)
            else {
                callback(null, rows);
                rows.forEach((row) => {
                    console.log(row.nama_program);
                });
                return rows
            }
        });
    }

    static oneData(name, callback) {
        let query = `SELECT nama_program FROM program WHERE nama_program = '${name}'`;
        db.get(query, (err, row) => {
            if (err) callback(err, null)
            else {
                if(row){
                    callback(null, row);
                    console.log('program', row.nama_program, 'ada dalam daftar');
                } else {
                    callback('not found')
                }
            }
        });
    }

    static updateModel(old_name, new_name, callback) {
        let query = `UPDATE program SET nama_program = '${new_name}' WHERE nama_program = '${old_name}'`;
        db.run(query, (err) => {
            if (err) callback(err)
            else {
                callback(null, 'data updated');
            }
        });
    }

    static deleteModel(name, callback) {
        let query = `DELETE FROM program WHERE nama_program = '${name}'`;
        db.run(query, (err) => {
            if (err) callback(err)
            else {
                callback(null, 'data deleted');
            }
        });
    }
}

module.exports = ProgramModel