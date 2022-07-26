import React from "react";
import "./Missions.css";
import Searchbar from "../search/Searchbar";
import {FaBusAlt, FaGlobeAmericas, FaUserCircle, FaCheckCircle, FaPushed} from "react-icons/fa";
import "../search/Searchbar.css";
import "../search/SearchResultList.css";

const Missions = ({getSearchResult}) => {
  return (
    <div className="top-container">
      <Searchbar handleSearchSubmission={getSearchResult}/>
      <div className="mission-container">
        <div className="icon-div">
          {<FaGlobeAmericas className="icons" color="#6E9078" size={50}/>}
          <p className="data">4.71</p>
          <p className="unit">billion ton(2020)</p>
          <p className="desc">US annual <br /> CO2 emissions</p>
        </div>
        <div className="icon-div">
        {<FaBusAlt className="icons" color="#6E9078" size={50}/>}
          <p className="data">1.82</p>
          <p className="unit">billion ton(2019)</p>
          <p className="desc">US ground transportation emissions</p>
        </div>
        <div className="icon-div">
        {<FaUserCircle className="icons" color="#6E9078" size={50}/>}
          <p className="data">17.54</p>
          <p className="unit">ton(2019)</p>
          <p className="desc">Per capita <br />CO2 emissions</p>
        </div>
        <div id="mission">
        {<FaCheckCircle className="icons" color="#6E9078" size={50}/>}
        <h2>Mission</h2>
          
          
          <li>◦ Aware CO2 emissions of your vehicle/trip</li>
          <li>◦ Aware social impact due to the CO2 emissions</li>
          <li>◦ Build good carbon habit</li>
          <li>◦ Reduced trip frequency/Combine trip</li>
          <li>◦ Consider high fuel economy vehicle</li>
          <li>◦ Take public transportation/support policy</li>
          <li>◦ Walk, Bike, Carpool, etc</li>
        </div>
      </div>
    </div>
  )
}

export default Missions;