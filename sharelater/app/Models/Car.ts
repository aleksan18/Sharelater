import { DateTime } from 'luxon'
import { BaseModel, column,hasMany,HasMany,  BelongsTo,belongsTo 
 } from '@ioc:Adonis/Lucid/Orm'
import Booking from './Booking'
import Pricing from './Pricing'
import Location from './Location'

export default class Car extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
  public category: string
  @column()
  public fuel: string
  @hasMany(()=>Booking)
  public bookings: HasMany<typeof Booking>
  @belongsTo(() => Pricing)
  public pricing: BelongsTo<typeof Pricing>
  @belongsTo(() => Location)
  public location: BelongsTo<typeof Location>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
