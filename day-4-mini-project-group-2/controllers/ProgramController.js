const ProgramModel = require('../models/ProgramModel')
const View = require('../views/index')

class ProgramController {
    static create(args) {
        let nama = args[1]
        
        ProgramModel.create(nama, (err) => {
            if(err) View.showErr(err)
            else {
                View.showSuc('data saved')
            }
        })
    }

    static readAll() {
        ProgramModel.allData((err) => {
            if(err) View.showErr(err)
            else {
                // console.log('object');
            }
        })
    }

    static readOne(args) {
        let name = args[1]
        ProgramModel.oneData(name, (err) => {
            if(err) View.showErr(err)
            else {
                // console.log('object');
            }
        })
    }

    static update(args) {
        let old_name = args[1]
        let new_name = args[2]
        
        ProgramModel.updateModel(old_name, new_name, (err) => {
            if(err) View.showErr(err)
            else {
                View.showSuc('data updated')
            }
        })
    }

    static delete(args) {
        let name = args[1]
        
        ProgramModel.deleteModel(name, (err) => {
            if(err) View.showErr(err)
            else {
                View.showSuc('data deleted')
            }
        })
    }
}

module.exports = ProgramController