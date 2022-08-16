import React from "react";
import "./FilterButtons.css";
import {FaPrescriptionBottle} from "react-icons/fa"


const FilterButtons = ({getFilteredData, efficiencyMPG, emissionData}) => {
  const handleMakeChange = () => {
    getFilteredData("popular_vehicle_make_search", efficiencyMPG);
  }

  const handleModelChange = () => {
    getFilteredData("popular_vehicle_model_search", efficiencyMPG);
  }

  const handleSimilarModelChange = () => {
    getFilteredData("same_make_diff_model", efficiencyMPG);
  }

  const handleSimilarMakeChange = () => {
    getFilteredData("same_model_diff_make_model", efficiencyMPG, emissionData);
  }


  return (
    <div className="more-insights-container">
      <hr></hr>
      <ul className="more-insights-ul">
        <button className="btn" onClick={handleMakeChange} > Popular Make Search</button>
        <button className="btn" onClick={handleModelChange} >Popular Model Search </button>
        <button className="btn" onClick={handleSimilarModelChange} >Models with same <br /> fuel economy  <br />from same make</button>
        <button className="btn" onClick={handleSimilarMakeChange} >Models with same <br />fuel economy <br /> from diff. make</button>
        <button id="dummy-square">
          <FaPrescriptionBottle className="filter-icon" size={40}/>
        </button>
      </ul>
    </div>
  )
}

export default FilterButtons;