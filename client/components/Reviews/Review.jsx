import React from 'react'
import { Link } from 'react-router-dom'

function Review (props) {
  console.log(props);
const {id, reviewer, writeup, rating} = props.review
  return (
    <div className="">
      <div className="">
        <div className="">
          <div className="">
            <div className="">
              <table className="">
                <thead>
                  <tr>
                    <th>Reviewer</th>
                    <th>{reviewer}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Writeup</td>
                    <td>{writeup}</td>
                  </tr>
                  <tr>
                    <td>Rating</td>
                    <td>{rating}</td>
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
