import React from "react";
import "./FilterButtons.css";

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
        <button onClick={handleMakeChange} > Popular Search - Make</button>
        <button onClick={handleModelChange} >Popular Search: Model</button>
        <button onClick={handleSimilarModelChange} >Models with same fuel economy <br /> from same make</button>
        <button onClick={handleSimilarMakeChange} >Models with similar fuel economy <br /> from diff. make</button>
        <li id="dummy-square"></li>
      </ul>
    </div>
  )
}

export default FilterButtons;