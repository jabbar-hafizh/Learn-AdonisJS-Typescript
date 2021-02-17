const sql = require('sqlite3').verbose()
const db = new sql.Database('./db.db')

class OrganisasiModel {
  static create(name, callback) {
    db.run(`INSERT INTO organisasi (nama_organisasi) VALUES ('${name}')`, (err) => {
      if (err) {
        callback(err)
      } else {
        callback(null)
      }
    })
  }

  static allData(callback) {
    db.all(`SELECT DISTINCT nama_organisasi FROM organisasi`, [], (err, rows) => {
      if (err) {
        callback(err)
      } else {
        callback(null, rows)
        rows.forEach((row) => {
          console.log(row.nama_organisasi)
        })
        return rows
      }
    })
  }

  static showData(name, callback) {
    db.get(`SELECT nama_organisasi FROM organisasi WHERE nama_organisasi = '${name}'`, (err, row) => {
      if (err) {
        callback(err, null)
      } else {
        if (row) {
          console.log(row);
          callback(null, row);
          console.log('organisasi', row.nama_organisasi, 'ada dalam daftar');
        } else {
          callback('not found')
        }
      }
    });
  }

  static updateData(oldData, newData, callback) {
    db.run(`UPDATE organisasi SET nama_organisasi = '${newData}' WHERE nama_organisasi = ${oldData}`, (err) => {
      if (err) {
        callback(err)
      } else {
        callback('data updated')
      }
    })
  }

  static deleteData(data, callback) {
    db.run(`DELETE FROM program WHERE nama_organisasi = '${data}`, (err) => {
      if (err) {
        callback(err)
      } else {
        callback(null, 'data deleted')
      }
    })
  }
}

module.exports = OrganisasiModel