const fs = require('fs')

function todoApp(){
    console.log("========= Todo App ===========")
    console.log("show todos : node index.js allTodos")
    console.log("create new todo : node index.js createTodo <your todo>")
    console.log("show todo : node index.js showTodo <todoId>")
    console.log("edit todo : node index.js updateTodo <todoId> <your update>")
    console.log("delete todo : node index.js deleteTodo <todoId>")
}

// ambil data dari data.json
let dataJson = fs.readFileSync('./data.json')

// parsing data dari json ke string
let data = JSON.parse(dataJson)

// deklarasi input
let args = process.argv

if(args[2] === 'help'){
    todoApp()
} else if(args[2] === 'allTodos'){
    allTodos()
} else if(args[2] === 'createTodo'){
    if(args[4]){
        console.log('harap memasukkan 1 per 1 todo nya')
    } else if(args[3]) {
        let todo = args[3]
        createTodo(todo)
    } else {
        console.log('error')
    }
} else if(args[2] === 'showTodo'){
    if(args[3]){
        let id = args[3]
        showTodo(id)
    } else {
        console.log('jangan lupa masukkan id')
    }
} else if(args[2] === 'updateTodo'){
    if(args[3]){
        if(args[4]){
            let id = args[3]
            let todoUpdate = args[4]
            updateTodo(id, todoUpdate)
        } else {
            console.log('harap masukkan todo update nya')
        }
    } else {
        console.log('harap masukkan id')
    }
} else if(args[2] === 'deleteTodo'){
    let id = args[3]
    if(id){
        deleteTodo(id)
        console.log('todo deleted')
    } else console.log('error')
} else {
    console.log("u/ memulai ketikkan 'node index.js help'")
}

function allTodos(){
    if(data.length === 0){
        console.log('todo is empty')
    } else {
        for(i=0; i<data.length; i++)
        console.log(data[i].todo)
    }
}

function createTodo(todo){
    const id = ((data.length === 0) ? 1 : data[data.length - 1].id + 1);
	data.push({id, todo});
	fs.writeFileSync('data.json', JSON.stringify(data));
	console.log('todo created');
}

function showTodo(id){
    if(id > data.length){
        console.log(`todo not found`)
    } else {
        let a = id - 1
        console.log(data[a].todo)
    }
}

function updateTodo(id, todoUpdate){
    if(id > data.length){
        console.log(`todo not found`)
    } else {
        let a = id - 1
        for(let i=0; i<data.length; i++){
            if(data[i].id == id){
                data[i].todo = todoUpdate
            } else {
                console.log('todo not found')
            }
        }
    }
    fs.writeFileSync('data.json', JSON.stringify(data));
}

function deleteTodo(id){
    const newData = data.filter(val => val.id !== parseInt(id))
    fs.writeFileSync('data.json', JSON.stringify(newData))
}