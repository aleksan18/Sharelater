import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany,hasMany,HasMany 
  ManyToMany, } from '@ioc:Adonis/Lucid/Orm'
import City from './City'
import Location from './Location'

export default class Zipcode extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
  public zipcode: string
  @hasMany(() => Location)
  public locations: HasMany<typeof Location>
  @manyToMany(() => City)
  public cities: ManyToMany<typeof City>
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
