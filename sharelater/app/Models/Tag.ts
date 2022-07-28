import { DateTime } from 'luxon'
import { BaseModel, column,  manyToMany,
  ManyToMany, } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Tag extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
  public name: string
  @column()
  public type: string

  @manyToMany(() => User)
  public users:ManyToMany<typeof User>
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
