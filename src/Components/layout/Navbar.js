import React from "react";
import carbonicon from '../../Assets/carbon-icon.png'
import { Link} from 'react-router-dom'; //yarn add react-router-dom
import './Navbar.css';

const Navbar = ({handleSearchSubmission}) => {
 
  return (
    <div>
      <ul className="header-text">
        <li className="logo-title">
          <Link className='title' to='/'>CARbon e-Mission </Link>
          </li>
          <hr className="vertical-hr"></hr>
        <li className="co2-icon"><img alt='icon' src={carbonicon} /> <img alt='icon' src={carbonicon} /> <img alt='icon'src={carbonicon} /></li>
        
        {/* <li>     
           <Searchbar />
      </li> */}
      </ul>
      <hr></hr>
    </div>
  )
}

export default Navbar;