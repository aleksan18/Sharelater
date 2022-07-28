import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users_tags'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('users_id').unsigned().references('id').inTable('users').notNullable().onDelete('CASCADE');
      table.integer('tags_id').unsigned().references('id').inTable('tags').notNullable().onDelete('CASCADE');
      table.primary(['users_id', 'tags_id']);
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
