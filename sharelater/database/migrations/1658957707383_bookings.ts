import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'bookings'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable();
      table.integer('users_id').unsigned().references('id').inTable('users').notNullable().onDelete('CASCADE');
      table.integer('cars_id').unsigned().references('id').inTable('cars').notNullable().onDelete('CASCADE');
      table.integer('duration').notNullable();
      table.dateTime('start_time').notNullable();
      table.dateTime('actual_end_time').notNullable();
      table.dateTime('planned_end_time').notNullable();
      table.boolean('pickedup').notNullable();
      table.boolean('booked').notNullable();
      table.float('price').notNullable();

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTableIfExists(this.tableName)
  }
}
