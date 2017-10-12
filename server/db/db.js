const path = require('path')
const config = require(path.join(__dirname, '/../../knexfile')).development
const knex = require('knex')(config)

function getMovies () {
  return knex('movies')
    .select()
}

function getReview () {
  return knex('reviews')
    .select()
}

module.exports = {
  getMovies,
  getReview
}
