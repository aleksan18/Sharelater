import { DateTime } from 'luxon'
import { BaseModel, column,BelongsTo,belongsTo } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Car from './Car'

export default class Booking extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column().dateTime
  public startTime: DateTime
  @column().dateTime
  public actualEndTime: DateTime
  @column().dateTime
  public plannedEndTime: DateTime
  @column()
  public duration: number
  @column()
  public pickedup:boolean
  @column()
  public booked:boolean
  @column()
  public price:number
  @belongsTo(() => User)
  public user: BelongsTo<typeof User>
  @belongsTo(() => Car)
  public car: BelongsTo<typeof Car>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
