exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('Reviews', function (table) {
    table.increments().primary()
    table.integer('movie_id')
    table.string('reviewer')
    table.string('writeup')
    table.string('rating')
    table.string('url')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('Reviews')
}
