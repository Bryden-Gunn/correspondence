exports.up = function (knex) {
  return knex.schema.createTable('messages', (table) => {
    table.increments('id').primary()
    table.string('recipient_username')
    table.string('sender_username')
    table.string('message')
    table.string('subject')
    table.string('active_time')
    table.boolean('read')
    table.boolean('archived')
    table.boolean('sent')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('messages')
}
