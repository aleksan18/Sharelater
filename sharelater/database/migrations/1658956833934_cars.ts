import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'cars'

  public async up () {
    this.schema.alterTable(this.tableName,(table)=>{
      table.integer('location_id').unsigned().references('id').inTable('locations').notNullable().onDelete('CASCADE');
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
