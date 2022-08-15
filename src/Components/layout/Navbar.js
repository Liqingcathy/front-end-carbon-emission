import React, {useState} from "react";
import carbonicon from '../../Assets/carbon-icon.png'
import { useNavigate, Link} from "react-router-dom";
import Toggle from "./Toggle";
import './Navbar.css';
import "./Toggle.css";
const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);
  let navigate = useNavigate();
  const handleToggleChange = () => {
    setIsToggled(!isToggled);
    navigate('/mission')
  }
  return (
    <div>
      <ul className="header-text">
        <li className="logo-title">
          <Link className='title' to='/'>CARbon E-mission </Link>
          </li>
        <li className="co2-icon"><img alt='icon' src={carbonicon} /> <img alt='icon' src={carbonicon} /> <img alt='icon'src={carbonicon} /></li>
        <Toggle 
          isToggled={isToggled} 
          onToggle={handleToggleChange}/>
        
      </ul>
      <hr></hr>
    </div>
  )
}

export default Navbar;