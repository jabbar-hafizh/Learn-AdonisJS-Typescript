import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class TodosController {
  public async showAll({response}:HttpContextContract) {
    const todos = await Database.query().select('*').from('todos')
    if(todos) {
      return response.status(200).json({message: 'success', data: todos});
    } else {
      return response.status(400).json({message: 'not found'});
    }
  }

  public async showOne({params, response}:HttpContextContract) {
    const todo = await Database.query().select('*').from('todos').where({ id: params.id })
    if(todo) {
      return response.status(200).json({message: 'success', data: todo});
    } else {
      return response.status(400).json({message: 'not found'});
    }
  }

  public async create({request, response}:HttpContextContract) {
    const data = {
      activity: request.input('activity')
    }
    await Database.insertQuery().table('todos').insert(data)
    const todos = await Database.query().select('*').from('todos').where({ activity: data.activity })
    if(todos) {
      return response.status(200).json({message: 'success', data: todos});
    } else {
      return response.status(400).json({message: 'not found'});
    }
  }

  public async update({params, request, response}:HttpContextContract) {
    let data = {
      activity: request.input('activity')
    }
    await Database.from('todos').where({id: params.id}).update({activity: data.activity})
    const todos = await Database.query().select('*').from('todos').where({ id: params.id })
    if(todos) {
      return response.status(200).json({200: 'OK', data_updated: todos});
    } else {
      return response.status(400).json({message: 'not found'});
    }
  }

  public async delete({params, response}:HttpContextContract) {
    const todo = await Database.from('todos').where({id: params.id}).delete()
    if(todo) {
      return response.status(200).json({200: 'OK', id_deleted: params.id});
    } else {
      return response.status(400).json({message: 'not found'});
    }
  }
}
