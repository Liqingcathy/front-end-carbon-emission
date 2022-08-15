import React from "react";
import "./Missions.css";
// import greenhouse from '../../Assets/Greenhouse-effect.gif'
import carbonicon from '../../Assets/carbon-icon.png'

const Missions = () => {
  return (
    <div className="missions-container">
      <ul className="missions-ul1">
        <li><img alt="earth"  /></li>
        <li>2019-2021 vehicle co2 emission World</li>
        <li>2019-2021 vehicle co2 emission US</li>
      </ul>
      <ul className="missions-ul2">
        <li className="icons"> </li>      
        <li className="missions-text">
        <p> Aware of Co2 emission from my weekly routines <br/>
            purchse merchant online big, less frequent <br/>
            reduce unneccessary trip frequency, instead take a walk, ride bikes <br/>
            take mass transportation as needed <br/>
            vote for public transit policy, politician
        </p>
        </li>
      </ul>
    </div>
  )
}

export default Missions;