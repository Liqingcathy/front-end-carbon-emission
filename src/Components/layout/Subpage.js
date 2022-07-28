import React from "react";
// import { Link } from 'react-router-dom'; //yarn add react-router-dom
import './Subpage.css';

const Header = () => {

  return (
    <div>
      <ul className="more-info-ul">
        <li className="sub-page"> 
          <h3>Missions</h3>
          <h3>About</h3></li>
        <li><h1 className="web-goals">Estimate - Search - Build Carbon Habit</h1></li>
      </ul>

     
    </div>
  )
}

export default Header;