const path = require('path')
const config = require(path.join(__dirname, '/../../knexfile')).development
const knex = require('knex')(config)

function getMovies () {
  return knex('movies')
    .select()
}

function getReviews (movie_id) {
  return knex('reviews')
    .where('movie_id', movie_id)
}

module.exports = {
  getMovies,
  getReviews
}
