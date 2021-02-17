import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class TodoModel extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ isPrimary: false })
  public activity: string

  @column.dateTime({ autoCreate: true })
  public due_date: DateTime
}
