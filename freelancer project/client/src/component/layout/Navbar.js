import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

const Navbar = () => {
    return (
        <div className="logbog">
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark  nav-color">


    <Link to='/' className="navbar-brand">freeLancer</Link>

    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to="/signup">SignUp</Link>
        </li>
      </ul>
    </div>
  </nav>
  </div>
    )
}

export default Navbar
