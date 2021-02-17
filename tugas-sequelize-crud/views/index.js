class View {
    static print(data) {
        console.log(data)
    }

    static showErr(err) {
        let error = new Error(err)
        console.log(error)
    }
}

module.exports = View