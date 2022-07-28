import { DateTime } from 'luxon'
import { BaseModel, column ,hasMany,HasMany,belongsTo,BelongsTo} from '@ioc:Adonis/Lucid/Orm'
import Car from './Car'
import City from './City'
import Zipcode from './Zipcode'

export default class Location extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
  public address: string
  @hasMany(()=>Car)
  public cars: HasMany<typeof Car>
  @belongsTo(() => City)
  public cities: BelongsTo<typeof City>
  @belongsTo(() => Zipcode,{

  })
  public zipcodes: BelongsTo<typeof Zipcode>
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
