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
            <th><h5>Reviewer</h5></th>
            <th><h5>Writeup</h5></th>
            <th><h5>Rating</h5></th>
          </tr>
        </thead>
        <tbody>
          {reviews.map(review => {
            const {id, reviewer, writeup, rating} = review
            return <tr key={id} className=''>
              <td><h5>{reviewer}</h5></td>
              <td><h5>{writeup}</h5></td>
              <td><h5>{rating}</h5></td>
                <Link to={`/reviews/review/${id}`}>
                  <div className="">
                    View Review
                  </div>
                </Link>

            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Reviews
