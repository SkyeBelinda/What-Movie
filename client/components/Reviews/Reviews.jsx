import React from 'react'
import { Link } from 'react-router-dom'

function Reviews (props) {
  const reviews = props.reviews

  return (
    <div>
      <div className=''>
        <h4 className="">Reviews</h4>
      </div>
      <table className="">
        <thead>
          <tr>
            <th><h5>Review Name</h5></th>
            <th><h5>Other Name</h5></th>
            <th><h5>link</h5></th>
          </tr>
        </thead>
        <tbody>
          {reviews.map(review => {
            const {id, movieName, otherName} = review
            return <tr key={id} className=''>
              <td><h5>{movieName}</h5></td>
              <td><h5>{otherName}</h5></td>
              <td>
                <Link to={`/reviews/review/${id}`}>
                  <div className="">
                    View Review
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

module.exports = Reviews
