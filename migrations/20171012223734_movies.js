exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('Movies', function(table) {
    table.increments().primary()
    table.string('movieName')
    table.string('plot')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('Movies')
}
