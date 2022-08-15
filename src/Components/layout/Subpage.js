import React from "react";
import { NavLink } from 'react-router-dom'; //yarn add react-router-dom
import './Subpage.css';

const Header = () => {

  return (
    <div>
      <ul className="more-info-ul">
        <li className="sub-page"> 
          {/* <h3>Missions</h3> */}
          <NavLink className="sub-page-link" to="/missions">
              Missions
            </NavLink>< br/>
          {/* <NavLink className="sub-page-link" to="/about">
              About
            </NavLink> */}
          </li>
          
        <li><h1 className="web-goals">Estimate - Search - Build Carbon Habit</h1></li>
      </ul>
      <hr></hr>
    </div>
  )
}

export default Header;