import React, {useState} from "react";
import { NavLink } from 'react-router-dom'; //yarn add react-router-dom
import { useNavigate} from "react-router-dom";
import {FaSpinner} from "react-icons/fa";
import Toggle from "./Toggle";
import './Subpage.css';
import "./Toggle.css";


const Header = () => {
  const [isToggled, setIsToggled] = useState(false);
  let navigate = useNavigate();
  
  const handleToggleChange = () => {
    setIsToggled(!isToggled);
    navigate('/mission')
  }
  return (
    <div>
      <ul className="more-info-ul">
        <li className="sub-page"> 
    
          {/* <NavLink className="sub-page-link" to="/missions">
              Missions
            </NavLink>< br/> */}
          </li>
        <Toggle 
          isToggled={isToggled} 
          onToggle={handleToggleChange}/>
        <li>
          <h1 className="web-goals">
            Estimate {<FaSpinner size={25} />} Search {<FaSpinner size={25} />} Build Carbon Habit
          </h1>
        </li>
      </ul>
      <hr></hr>
    </div>
  )
}

export default Header;