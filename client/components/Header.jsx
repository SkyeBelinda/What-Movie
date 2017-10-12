import React from 'react'
import { Link } from 'react-router-dom'

function Header () {
  return (
    <div className="">
      <nav className="">
        <div className="">
          <Link to="/" className="">What Movie</Link>
          <ul id="nav-mobile" className="">
            <li><Link to="/players">Movies</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header
