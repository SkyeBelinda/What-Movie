import React from 'react'
import { Link } from 'react-router-dom'

function Movie (props) {

  const {id, movieName} = props.movie

  return (
    <div className="">
      <div className="">
        <div className="">
          <div className="">
            <div className="">
              <table className="">
                <thead>
                  <tr>
                    <th>Movie Name</th>
                    <th>{movieName}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Other Name</td>
                    <td>{otherName}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Movie
