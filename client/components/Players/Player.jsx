import React from 'react'
import { Link } from 'react-router-dom'

function Player (props) {

  const {id, firstName, surName, knickName, favHand, favHeadsUp, leastFavHeadsUp, image} = props.player

  return (
    <div className="row">
      <div className="col s12 m10 offset-m1">
        <div className="card horizontal">
          <div className="card-image">
            <img src={image} alt="" height="400" width="300"></img>
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <table className="striped">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>{firstName} {surName}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className=''>
                    <td>Knickname</td>
                    <td>{knickName}</td>
                  </tr>
                  <tr>
                    <td>Favorite Hand</td>
                    <td>{favHand}</td>
                  </tr>
                  <tr>
                    <td>Favorite Heads Up</td>
                    <td>{favHeadsUp}</td>
                  </tr>
                  <tr>
                    <td>Least Favorite Heads Up</td>
                    <td>{leastFavHeadsUp}</td>
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

export default Player
