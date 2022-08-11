import React from "react";
import carbonicon from '../../Assets/carbon-icon.png'
import { Navigate, Link} from "react-router-dom";
import './Navbar.css'
const Navbar = () => {

  return (
    <div className="nav-bar">
      <ul className="header-text">
        <li className="logo-title">
          <Link className='title' to='/'>CARbon E-mission </Link>
          </li>
          
        <li className="co2-icon"><img alt='icon' src={carbonicon} /> <img alt='icon' src={carbonicon} /> <img alt='icon'src={carbonicon} /></li>
      </ul>
      <hr></hr>
    </div>
  )
}

export default Navbar;