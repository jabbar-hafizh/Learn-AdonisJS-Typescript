const KaryawanModel = require('../models/KaryawanModel')
const View = require('../views/index')

class KaryawanController {
    static register(args) {
        let username = args[1]
        let password = args[2]
        let role = args[3]
        
        KaryawanModel.create(username, password, role, (err) => {
            if(err) View.showErr(err)
            else {
                View.saved('data saved')
            }
        })
    }

    static login(args) {
        let username = args[1]
        let password = args[2]

        KaryawanModel.loginCheck(username, password, (err) => {
            if(err) View.showErr()
            else {
                View.saved('logged in')
            }
        })
    }
}

module.exports = KaryawanController