const MuzakkiModel = require('../models/MuzakkiModel')
const View = require('../views/index')

class MuzakkiController {
    static addMuzakki(args) {
        let nama = args[1]
        let amanah = args[2]
        let role = args[3]
        
        if(role == 'Receptionist'){
            MuzakkiModel.createMuzakki(nama, amanah, (err) => {
                if(err) View.showErr(err)
                else {
                    View.saved('data saved')
                }
            })
        } else {
            console.log('please type your role after amanah');
        }
    }
}

module.exports = MuzakkiController