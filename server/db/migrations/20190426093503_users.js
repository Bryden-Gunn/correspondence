exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.string('auth0_id')
    table.string('name')
    table.string('username')
    table.string('email')
    table.string('delay_id')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('users')
}
