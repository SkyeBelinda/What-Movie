exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('Reviews', function (table) {
    table.increments().primary()
    table.string('movie_id')
    table.string('reviewer')
    table.string('writeup')
    table.interger('rating')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('Reviews')
}
