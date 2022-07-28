import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable();
      table.string('username',100).notNullable();
      table.string('password',20).notNullable();
      table.string('email',100).notNullable();
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
