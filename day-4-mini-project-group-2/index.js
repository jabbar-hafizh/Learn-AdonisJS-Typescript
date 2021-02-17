const ProgramController = require('./controllers/ProgramController');
const ProgramKaderController = require('./controllers/ProgramKaderController');
const KaderController = require('./controllers/KaderController')
const Organisasi = require('./controllers/OrganisasiController')
const View = require('./views/index');

const args = process.argv.slice(2)
let command = args[0]

switch (command) {
    // node index.js program-create (nama program)
    case 'program-create':
        ProgramController.create(args)
        break;
    // node index.js program-read
    case 'program-read':
        ProgramController.readAll()
        break;
    // node index.js program-readOne (nama program)
    case 'program-readOne':
        ProgramController.readOne(args)
        break;
    // node index.js program-update (nama program lama) (nama program baru)
    case 'program-update':
        ProgramController.update(args)
        break;
    // node index.js program-delete (nama program)
    case 'program-delete':
        ProgramController.delete(args)
        break;
    // node index.js program-kader-create (username) (nama program)
    case 'program-kader-create':
        ProgramKaderController.create(args)
        break;
    case 'login':
        KaderController.login(args)
        break;
    case 'kader-create':
        KaderController.create(args)
        break;
    case 'kader-read':
        KaderController.showAll()
        break;
    case 'kader-readOne':
        KaderController.showData(args)
        break;
    case 'kader-update':
        KaderController.update(args) //node index.js <id kader> <username baru> <pass baru> <univ baru> <jurusan baru>
        break;
    case 'kader-delete':
        KaderController.delete(args)
        break;
    case 'organisasi-create':
        Organisasi.createOrganisasi(args[1])
        break;
    case 'organisasi-showall':
        Organisasi.showAllOrganisasi()
        break;
    case 'organisasi-showone':
        Organisasi.showOneOrganisasi(args[1])
        break;
    case 'organisasi-update':
        Organisasi.updateOrganisasi(args[1], args[2])
        break;
    case 'organisasi-delete':
        Organisasi.deleteOrganisasi(args[1])
        break;
    case "logout":
        console.log('logged out');
        break;
    default:
        View.showErr('not found')
        break;
}