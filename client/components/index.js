import request from 'superagent'

export function getMovies () {
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
      throw Error('Cannot GET Players!')
    })
}

export function getReviews () {
  return request.get('/api/v1/reviews/reviews')
    .then(result => {
      const reviews = result.body
      return reviews.map(review => {
        return Object.assign(
          {},
          review
        )
      })
    })
    .catch(err => {
      throw Error('Cannot GET Players!')
    })
}
