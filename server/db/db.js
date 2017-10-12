const path = require('path')
const config = require(path.join(__dirname, '/../../knexfile')).development
const knex = require('knex')(config)

function getMovies() {
  return knex('Movies')
    .select()
}

module.exports = {
  getMovies
}
