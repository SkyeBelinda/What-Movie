import React from 'react'
import { Link } from 'react-router-dom'

function Header () {
  return (
    <div className="">
      <nav className="">
        <div className="">
          <Link to="/" className="">What Movie</Link>
          <ul id="nav-mobile" className="">
            <li><Link to="/movies">Movies</Link></li>
            <li><Link to="/reviews">Reviews</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header
