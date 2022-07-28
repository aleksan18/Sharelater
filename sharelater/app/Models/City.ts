import { DateTime } from 'luxon'
import { BaseModel, column,manyToMany,ManyToMany,belongsTo,BelongsTo,hasMany,HasMany} from '@ioc:Adonis/Lucid/Orm'
import Zipcode from './Zipcode'
import Country from './Country'
import Location from './Location'

export default class City extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
  public name: string
  @manyToMany(() => Zipcode)
  public cities: ManyToMany<typeof Zipcode>
  @hasMany(() => Location)
  public locations: HasMany<typeof Location>
  @belongsTo(() => Country)
  public country: BelongsTo<typeof Country>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
