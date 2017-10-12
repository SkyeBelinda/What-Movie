import React from 'react'
import { Link } from 'react-router-dom'

function Players (props) {
  const players = props.players

  return (
    <div className=''>
      <div className=''>
        <h4 className="">Players</h4>
      </div>
      <table className="">
        <thead>
          <tr>
            <th><h5>Name</h5></th>
            <th><h5>Image</h5></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {players.map(player => {
            const {id, firstName, surName, knickName, favHand, favHeadsUp, leastFavHeadsUp, image} = player
            return <tr key={id} className=''>
              <td><h5>{firstName} {surName}</h5></td>
              <td><img src={image} alt="" height="100" width="100"></img></td>
              <td>
                <Link to={`/players/player/${id}`}>
                  <div className="">
                    View Player
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
export default Players
