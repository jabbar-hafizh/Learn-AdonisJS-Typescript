const ProgramKaderModel = require('../models/ProgramKaderModel')
const View = require('../views/index')

class ProgramKaderController {
    static create(args) {
        let nama_kader = args[1]
        let nama_program = args[2]
        ProgramKaderModel.create(nama_kader, nama_program, (err) => {
            if(err) View.showErr(err)
            else {
                // console.log('object');
            }
        })
    }
}

module.exports = ProgramKaderController