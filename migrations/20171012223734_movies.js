exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('movies', function(table) {
    table.increments().primary()
    table.string('title')
    table.string('plot')
    table.string('url')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('movies')
}
