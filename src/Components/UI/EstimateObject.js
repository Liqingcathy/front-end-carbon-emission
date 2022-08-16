import React from "react";
import carbonicon from '../../Assets/carbon-icon.png'

// import EstimateValue from "../UI/EstimateValue"
const EstimateObject = ({emissionData}) => {
  
  // console.log("inside of estimate object");
  // console.log(emissionData);

  return (
    <div className="estimate-result-container">
      <hr></hr>
      <li className="co2-icon">
        <img alt='icon'src={carbonicon} />
      </li>
      <div className="estimate-result">
        {emissionData[["vehicle_model"]]} {emissionData[["carbon_g"]]}
      </div>
      
      <hr></hr>
    </div>
  )
};

export default EstimateObject;