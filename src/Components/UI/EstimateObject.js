import React from "react";
// import EstimateValue from "../UI/EstimateValue"
const EstimateObject = ({emissionData}) => {
  
  // console.log("inside of estimate object");
  console.log(emissionData);

  return (
    <div>
      <div className="result-container">{emissionData[["vehicle_model"]]} {emissionData[["carbon_g"]]}</div>
    </div>
  )
};

export default EstimateObject;