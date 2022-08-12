import React from "react";
import Sorting from "../Filter/Sorting";
import SortingDisplays from "../Filter/SortingDisplays";
// import EstimateValue from "../UI/EstimateValue"
const EstimateObject = ({emissionData, getFilteredData, sortingResult, setEmissionData}) => {
  
  // console.log("inside of estimate object");
  // console.log(emissionData);

  return (
    <div>
      <div className="result-container">{emissionData[["vehicle_model"]]} {emissionData[["carbon_g"]]}</div>
      <Sorting getFilteredData={getFilteredData} emissionData={emissionData} setEmissionData={setEmissionData}/> 
      <SortingDisplays sortingResult={sortingResult} emissionData={emissionData} />
    </div>
  )
};

export default EstimateObject;