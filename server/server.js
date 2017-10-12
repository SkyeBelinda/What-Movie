const express = require('express')

// const movies = require('./routes/movies')

const server = express()
server.use(express.static('public'))

server.use('/api/v1/movies', require('./routes'))

module.exports = server
