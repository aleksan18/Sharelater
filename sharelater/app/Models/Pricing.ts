import { DateTime } from 'luxon'
import { BaseModel, column,hasOne,
  HasOne} from '@ioc:Adonis/Lucid/Orm'
import Car from './Car'

export default class Pricing extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
  public stardartMinuteRate: number
  @column()
  public exceededBookedTimeRate: number
  @hasOne(()=>Car)
  public pricings: HasOne<typeof Car>
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
