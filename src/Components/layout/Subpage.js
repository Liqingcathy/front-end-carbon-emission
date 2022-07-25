import React from "react";
import { Link } from 'react-router-dom'; //yarn add react-router-dom
import './Subpage.css';

const Header = () => {

  return (
    <div>
      <ul className="more-info-ul">
        <li className="sub-page"> <h3>Missions</h3></li>
        <li className="sub-page"><h3>About</h3></li>
        <h2 className="web-goals">Estimate | Search | Build Carbon Habit</h2>
      </ul>

     
    </div>
  )
}

export default Header;