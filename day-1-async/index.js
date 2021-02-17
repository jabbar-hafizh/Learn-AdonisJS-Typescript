var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Tulis code untuk memanggil function readBooks di sini

// function firstRead (books) {
//     for(const book of books){
//         readBooks(10000, book)
//     }
//     return 'loading..'
// }

// console.log(firstRead(books));

readBooks(10000, books[0], (time) => {
    readBooks(time, books[1], (time) => {
        readBooks(time, books[2], (time) => {
            if(time) console.log('end')
        })
    })
})