import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'cities_zipcodes'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('city_id').unsigned().references('id').inTable('cities').notNullable().onDelete('CASCADE');
      table.integer('zipcodes_id').unsigned().references('id').inTable('zipcodes').notNullable().onDelete('CASCADE');
      table.primary(['city_id', 'zipcodes_id']);
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
