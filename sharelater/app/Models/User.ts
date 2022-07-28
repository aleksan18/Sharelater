import { DateTime } from 'luxon'
import { BaseModel, column ,hasMany,HasMany,  
  manyToMany,
  ManyToMany,
} from '@ioc:Adonis/Lucid/Orm'
import Booking from './Booking'
import Tag from './Tag'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public username: string
  @column()
  public email: string
  @column()
  public password: string
  @hasMany(() => Booking)
  public bookings: HasMany<typeof Booking>
  
  @manyToMany(() => Tag)
  public tags: ManyToMany<typeof Tag>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
