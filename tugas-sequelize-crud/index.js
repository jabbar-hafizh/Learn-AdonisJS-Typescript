const ArticleController = require('./controllers/ArticleController');
const View = require('./views/index')

const args = process.argv.slice(2)
const command = args[0]

switch (command) {
    case 'showAll':
        ArticleController.showAll()
        break;
    case 'create':
        ArticleController.create(args)
        break;
    case 'show':
        ArticleController.show(args)
        break;
    case 'update':
        ArticleController.update(args)
        break;
    case 'delete':
        ArticleController.delete(args)
        break;                       
    default:
        View.showErr(error)
        break;
}