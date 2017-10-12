import request from 'superagent'

export function getPlayers () {
  return request.get('/api/v1/players/players')
    .then(result => {
      const players = result.body
      return players.map(player => {
        return Object.assign(
          {},
          player
        )
      })
    })
    .catch(err => {
      throw Error('Cannot GET Players!')
    })
}
