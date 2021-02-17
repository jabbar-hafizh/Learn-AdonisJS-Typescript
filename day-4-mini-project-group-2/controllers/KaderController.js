const KaderModel = require('../models/KaderModel')
const View = require('../views/index')

class KaderController{
    static create(args){
        let name = args[1]
        let pass = args[2]
        let univ = args[3]
        let jurusan = args[4]

        KaderModel.createKader(name, pass, univ, jurusan, (err) => {
            if(err){
                View.showErr(err)
            }else{
                View.showSuc('Data Berhasil Disimpan')
            }
        })
    }

    static showAll(){
        KaderModel.showAll((err) => {
            if(err){
                View.showErr(err)
            }else{

            }
        })
    }

    static showData(args) {
        let name = args[1]
        KaderModel.showData(name, (err) => {
            if(err) View.showErr(err)
            else {
                // console.log('object');
            }
        })
    }

    static update(args) {
        let id = args[1]
        let username = args[2]
        let pass = args[3]
        let univ = args[4]
        let jurusan = args[5]
        
        KaderModel.updateModel(id, username, pass, univ, jurusan, (err) => {
            if(err) View.showErr(err)
            else {
                View.showSuc('data updated')
            }
        })
    }

    static delete(args) {
        let name = args[1]
        
        KaderModel.deleteModel(name, (err) => {
            if(err) View.showErr(err)
            else {
                View.showSuc('data deleted')
            }
        })
    }

    static login(args) {
        let username = args[1]
        let pass = args[2]

        KaderModel.login(username, pass, (err) => {
            if(err) View.showErr()
            else {
                View.showSuc('logged in')
            }
        })
    }


}

module.exports = KaderController