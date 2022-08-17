import React, {useState} from "react";
import {FaSpinner} from "react-icons/fa";
// import carbonicon from '../../Assets/carbon-icon.png'
import EmissionSocialImpact from "./EmissionSocialImpact";
import "./EstimateObject.css"
// import EstimateValue from "../UI/EstimateValue"
const EstimateObject = ({emissionData}) => {
  // console.log("inside of estimate object");
  // console.log(emissionData);

  return (
    <div className="estimate-result-container">
      <hr className="estimate-hr"></hr>
      {/* <li className="co2-icon">
        <img alt='icon'src={carbonicon} />
      </li> */}
      <div className="estimate-result">
       <p>CO2 Emission result {emissionData[["vehicle_model"]]}</p>
        {emissionData[["carbon_g"]]} g
      </div>

      
      <div className="estimate-comparision">
      
        <p className="social-impact-desc">
          <h3>Compare to Annual Impact on Society, Climate Change</h3>
        </p>
        <EmissionSocialImpact emissionToSocial={emissionData['carbon_g']} emissionData={emissionData} />
      </div>
      <hr></hr>
    </div>
  )
};

export default EstimateObject;