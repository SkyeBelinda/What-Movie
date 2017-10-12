import React from 'react'
import { Link } from 'react-router-dom'

function Review (props) {
const {id, movieName, otherName} = props.movie
  return (
    <div className="">
      <div className="">
        <div className="">
          <div className="">
            <div className="">
              <table className="">
                <thead>
                  <tr>
                    <th>Review Name</th>
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

export default Review
