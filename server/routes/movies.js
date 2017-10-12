const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
router.use(bodyParser.json())
const request = require('superagent')

const db = require('../db/db')

router.get('/', (req, res) => {
  db.getMovies()
    .then(result => {res.json(result)})
    .catch(err => res.status(500).end)
})

router.get('/db', (req, res) => {
  console.log(req.query)
  request
  .get('https://api.themoviedb.org/3/search/movie')
  .query({
    // with_genres: 18,
    query: req.query.movie || 'bee movie',
    api_key: "key goes here",
    language: "en-US"
  })
  .end((err, response) => {
    // console.log(res.body);
    // console.log({ err, res: response.body.results });
    res.json(response.body.results)
  })
})

module.exports = router
