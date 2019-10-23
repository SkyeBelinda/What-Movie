import request from 'superagent'

export function getMovies() {
  return request.get('/api/v1/movies/movies')
    .then(result => {
      const movies = result.body
      return movies.map(movie => {
        return Object.assign(
          {},
          movie
        )
      })
    })
    .catch(err => {
      throw Error('Cannot GET Movies!')
    })
}

export function getReviews(id) {
  return request.get('/api/v1/movies/reviews/'+ id)
    .then(result => {
      return result.body
    })
    .catch(err => {
      throw Error('Cannot GET Reviews!')
    })
}

export function getMovieData (title) {
  return request.get('/api/v1/movies/db')
  .query({movie: title})
  .then(res => res.body[0])
}