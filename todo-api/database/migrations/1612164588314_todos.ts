import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Todos extends BaseSchema {
  protected todos = 'todos'

  public async up () {
    this.schema.createTable(this.todos, (table) => {
      table.increments('id')
      table.string('activity')
      table.timestamp('due_date')
    })
  }

  public async down () {
    this.schema.dropTable(this.todos)
  }
}
