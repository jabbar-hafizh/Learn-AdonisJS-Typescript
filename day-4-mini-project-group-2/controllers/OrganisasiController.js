const Model = require('../models/OrganisasiModel')
const View = require('../views/')

class OrganisasiController {
  static createOrganisasi(name) {
    Model.create(name, (err) => {
      if (err) {
        View.showErr(err)
      } else {
        View.showSuc('data saved')
      }
    })
  }

  static showAllOrganisasi() {
    Model.allData((err) => {
      if (err) {
        View.showErr(err)
      } else {
        View.showSuc('All data is showed')
      }
    })
  }

  static showOneOrganisasi(name) {
    Model.showData(name, (err, data) => {
      if (err) {
        View.showErr(err)
      } else {
        View.showSuc(data)
      }
    })
  }

  static updateOrganisasi(old, newData) {
    Model.updateData(old, newData, (err) => {
      if (err) {
        View.showErr(err)
      } else {
        View.showSuc('data updated')
      }
    })
  }

  static deleteOrganisasi(name) {
    Model.deleteData(name, (err) => {
      if (err) {
        View.showErr(err)
      } else {
        View.showSuc('data deleted')
      }
    })
  }
}

module.exports = OrganisasiController