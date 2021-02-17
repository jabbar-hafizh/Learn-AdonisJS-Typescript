const KaryawanController = require('./controllers/KaryawanController');
const MuzakkiController = require('./controllers/MuzakkiController');
const View = require('./views/index');

const args = process.argv.slice(2)
let command = args[0]

switch (command) {
    case 'register':
        KaryawanController.register(args)
        break;
    case 'login':
        KaryawanController.login(args)
        break;
    case 'addMuzakki':
        MuzakkiController.addMuzakki(args)
        break;
    case "logout":
        console.log('logged out');
        break;    
    default:
        View.showErr('not found')
        break;
}