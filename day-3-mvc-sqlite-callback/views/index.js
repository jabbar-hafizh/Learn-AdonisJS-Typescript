class View {
    static showErr(err) {
        const error = new Error(err)
        if(err) console.error(error)
    }

    static saved(msg) {
        console.log(msg);
    }
}

module.exports = View