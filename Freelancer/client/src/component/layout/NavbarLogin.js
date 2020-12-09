import React from 'react'
import {Link} from 'react-router-dom'

const NavbarLogin = (props) => {
  const resetTokenHandler = ()=>{
      props.resetToken();
  }
  return(
    <div>
      <nav className="navbar bg-dark">
        <h1>
        <Link to="/" title="Logout" onClick={resetTokenHandler}>Freelancer</Link>
        </h1>
        <ul>
          <li><Link to="/profiles">Hire Freelancers</Link></li>
          <li><Link to="/posts">Browse Projects</Link></li>
	        <li><Link to="/createPost">Post Project</Link></li>
          <li>
            <Link to="/dashboard">
              <i className="fas fa-user"></i>
              <span className="hide-sm">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/" title="Logout" onClick={resetTokenHandler}>
            <i className="fas fa-sign-out-alt"></i>
            <span className="hide-sm">Logout</span></Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavbarLogin;