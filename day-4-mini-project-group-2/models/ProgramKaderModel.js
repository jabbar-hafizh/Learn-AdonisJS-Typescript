const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db.db');

class ProgramKaderModel {
    static create(nama_kader, nama_program, callback) {
        let query_p = `SELECT * FROM program WHERE nama_program = '${nama_program}'`;
        db.get(query_p, (err, row) => {
            if (err) callback(err, null)
            else {
                if(row){
                    callback(null, row);
                    console.log('program', row.nama_program, 'ada dalam daftar');
                    let id_program = row.id
                    let query_k = `SELECT * FROM kader WHERE username = '${nama_kader}'`;
                    db.get(query_k, (err, row) => {
                        if (err) callback(err, null)
                        else {
                            if(row){
                                callback(null, row);
                                console.log('username', row.username, 'ada dalam daftar');
                                let id_kader = row.id
                                let query = `INSERT INTO trx_kader_program (id_kader, id_program) VALUES (${id_kader}, ${id_program})`;
                                db.run(query, (err) => {
                                    if (err) callback(err)
                                    else {
                                        callback(null, 'data saved');
                                        console.log(`${nama_kader} berhasil mengikuti program ${nama_program}`);
                                    }
                                });
                            } else {
                                callback('not found')
                            }
                        }
                    });
                } else {
                    callback('not found')
                }
            }
        });
        
    }
}

module.exports = ProgramKaderModel