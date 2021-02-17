/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

// Route.get('users', 'UsersController.index')
Route.post('users/article', 'UsersController.store')
// Route.post('users/article/:id', 'UsersController.showOne')
// Route.put('users/article/:id', 'UsersController.update')

Route.get('todos', 'TodosController.showAll')
Route.post('todos/:id', 'TodosController.showOne')
Route.post('todos', 'TodosController.create')
Route.put('todos/:id', 'TodosController.update')
Route.delete('todos/:id', 'TodosController.delete')
