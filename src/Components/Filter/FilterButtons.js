import React from "react";
import "./FilterButtons.css";
import {
  FaPrescriptionBottle,
  FaBraille,
  FaFunnelDollar,
} from "react-icons/fa";

const FilterButtons = ({ getFilteredData, efficiencyMPG, emissionData }) => {
  const handleMakeChange = () => {
    getFilteredData("popular_vehicle_make_search", efficiencyMPG);
  };

  const handleModelChange = () => {
    getFilteredData("popular_vehicle_model_search", efficiencyMPG);
  };

  const handleSimilarModelChange = () => {
    getFilteredData("same_make_diff_model", efficiencyMPG);
  };

  const handleSimilarMakeChange = () => {
    getFilteredData("same_model_diff_make_model", efficiencyMPG, emissionData);
  };

  return (
    <div className='more-insights-container'>
      <hr></hr>
      <ul className='more-insights-ul'>
        <button className='btn' onClick={handleMakeChange}>
          <FaBraille className='filter-data-icon' size={40} />
          <br /> Popular Make Search
        </button>
        <button className='btn' onClick={handleModelChange}>
          <FaBraille className='filter-data-icon' size={40} />
          <br />
          Popular Model Search{" "}
        </button>
        <button className='btn' onClick={handleSimilarModelChange}>
          <FaFunnelDollar className='economy-data-icon' size={30} />
          <br />
          Same Fuel Economy <br />
          from Diff. Model
        </button>
        <button className='btn' onClick={handleSimilarMakeChange}>
          <FaFunnelDollar className='economy-data-icon' size={30} />
          <br />
          Same Fuel Economy <br /> from Diff. Make
        </button>
        <button id='dummy-square'>
          <FaPrescriptionBottle className='filter-icon' size={40} />
        </button>
      </ul>
    </div>
  );
};

export default FilterButtons;
