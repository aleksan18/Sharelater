import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'tags'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable();
      table.string('name').notNullable();
      table.string('type').notNullable();
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
