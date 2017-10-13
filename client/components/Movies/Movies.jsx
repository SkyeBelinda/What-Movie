import React from 'react'
import { Link } from 'react-router-dom'

function Movies (props) {
  const movies = props.movies
  console.log(movies)
  return (
    <div className=''>
      <div className=''>
        <h4 className="">Movies</h4>
      </div>
      <table className="">
        <thead>
          <tr>
            <th><h5>Title</h5></th>
            <th><h5>Plot</h5></th>
            <th><h5>Image</h5></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {movies.map(movie => {
            const {id, title, plot, url} = movie
            return <tr key={id} className=''>
              <td><h5>{title}</h5></td>
              <td><h5>{plot}</h5></td>
              <td><img src={url}></img></td>
              <td>
                <Link to={`/movies/movie/${id}`}>
                  <div className="">
                    View Movie
                  </div>
                </Link>
              </td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}
export default Movies
