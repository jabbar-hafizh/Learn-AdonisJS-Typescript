class View {
    static showErr(err){
        const error = new Error(err)
        console.error(error)
    }

    static showSuc(success){
        console.log(success)
    }
}

module.exports = View