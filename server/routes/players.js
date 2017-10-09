const express = require('express')
const router = express.Router()

const db = require('../db/db')
const bodyParser = require('body-parser')

router.use(bodyParser.json())

router.get('/', (req, res) => {
  db.getPlayers()
    .then(data => {res.json(data)})
    .catch(err => res.status(500))

})

router.post('/', (req, res) => {
  let {firstName, surName, knickName, favHand,  favHeadsUp, leastFavHeadsUp} = req.body
  const newPlayer = {firstName, surName, knickName, favHand,  favHeadsUp, leastFavHeadsUp}
  db.addPlayer(newPlayer)
    .then((player) => {res.json(player[0])})
    .catch(err => res.status(500))
})

module.exports = router
