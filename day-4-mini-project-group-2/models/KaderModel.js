var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db.db');

class KaderModel{
    static createKader(name, pass, univ, jurusan, callback){
        const query = `INSERT INTO kader (username, pass, univ, jurusan) VALUES ('${name}', '${pass}', '${univ}', '${jurusan}');`;
        db.run(query, (err) => {
            if(err){
                callback(err)
            }else{
                callback(null, 'Berhasil Menyimpan Kader');
            }
        });
    }

    static showAll(callback){
        const query = `SELECT * FROM kader`;
        db.all(query, [], (err, rows) =>{
            if(err){
                callback(err)
            }else{
                callback(null, rows);
                rows.forEach((row) => {
                    console.log(row.username, row.pass, row.univ, row.jurusan);
                });
                return rows
            }
        })
    }

    static showData(name, callback) {
        let query = `SELECT username FROM kader WHERE username = '${name}'`;
        db.get(query, (err, row) => {
            if (err) callback(err, null)
            else {
                if(row){
                    callback(null, row);
                    console.log('kader', row.username, 'ada dalam daftar');
                } else {
                    callback('not found')
                }
            }
        });
    }

    static updateModel(id, username, pass, univ, jurusan, callback) {
        let query = `UPDATE kader SET username = '${username}', pass = '${pass}', univ = '${univ}', jurusan = '${jurusan}' WHERE id = '${id}'`;
        db.run(query, (err) => {
            if (err) callback(err)
            else {
                callback(null, 'data updated');
            }
        });
    }

    static deleteModel(name, callback) {
        let query = `DELETE FROM kader WHERE username = '${name}'`;
        db.run(query, (err) => {
            if (err) callback(err)
            else {
                callback(null, 'data deleted');
            }
        });
    }

    static login(username, pass, callback) {
        let query = `SELECT * FROM kader WHERE username = '${username}' AND pass = '${pass}'`;
        db.get(query, (err) => {
            if (err) callback(err)
            else {
                callback(null, `logged in`);
            }
        });
    }

}

module.exports = KaderModel