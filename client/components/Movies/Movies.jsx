import React from 'react'
import { Link } from 'react-router-dom'

function Movies (props) {
  const movies = props.movies

  return (
    <div className=''>
      <div className=''>
        <h4 className="">Movies</h4>
      </div>
      <table className="">
        <thead>
          <tr>
            <th><h5>Movie Name</h5></th>
            <th><h5>Other Name</h5></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {movies.map(movie => {
            const {id, movieName, otherName} = movie
            return <tr key={id} className=''>
              <td><h5>{movieName}</h5></td>
              <td><h5>{otherName}</h5></td>
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
