import React from "react";
import carbonicon from '../../Assets/carbon-icon.png'
import './Navbar.css'
const Navbar = () => {

  return (
    <div>
      <ul className="header-text">
        <li className="logo-title"><h1> CARbon E-mission</h1></li>
        <li className="co2-icon"><img alt='icon' src={carbonicon} /> <img alt='icon' src={carbonicon} /> <img alt='icon'src={carbonicon} /></li>
      </ul>
      <hr></hr>
    </div>
  )
}

export default Navbar;