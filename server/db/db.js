const path = require('path')
const config = require(path.join(__dirname, '/../../knexfile')).development
const knex = require('knex')(config)

function getPlayers() {
  return knex('Players')
    .select()
}

module.exports = {
  getPlayers
}
