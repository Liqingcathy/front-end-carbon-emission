import React, {useState} from "react";
import "./Categories.css";
import {FaCarSide, FaHandPointUp} from "react-icons/fa"

import MpgFuelEconomy from "../Insight/MpgFuelEconomy";
import EmissionInsight from "../Insight/EmissionInsight";
import SocialImpact from "../Insight/SocialImpact";

const Categories = ({ getFuelEfficiencyInsight, userData, efficiencyMPG, emissionData, setEmissionData}) => {
  // console.log("inside of categories component");
  // console.log(`userInput ${JSON.stringify(userInput)}`)
  // console.log(`userInput-user_name ${JSON.stringify(userInput['user_name'])}`)
  // console.log(`emissionData ${JSON.stringify(emissionData)}`);
  // console.log(`userData ${JSON.stringify(userData)}`);
  // console.log(`userInput ${JSON.stringify(userInput)}`);

  const [userEmission, setUserEmission] = useState([]);
  const [emissionToSocial, setEmissionToSocial] = useState(0);
  return (
    <div className='category-container'>
      <p>Insights based on your vehicle's emission result:</p>
      <ul className='category-items'>
        
        <li className="category-list">
          <button className="category-text"
            onClick={() => {
              setEmissionData(emissionData);
              setUserEmission(emissionData);
            }}
            > Carbon dioxide (CO2) emission standards <br /> 
            Click to see your vehicle's emission <br /> 
            {/* <FaHandPointUp className="click-to-see-chart" size={30}/>  */}
             </button> 
          <EmissionInsight userEmission={userEmission} emissionData={emissionData} />
          
          <hr></hr>
        </li>

        <li className="category-list">
          <button className="category-text"
            onClick={() => {
              getFuelEfficiencyInsight(
                userData["data"]["attributes"]["vehicle_model"] + "-" +userData["data"]["attributes"]["vehicle_year"]
                );
            }}
          > Your Vehicle's Fuel Economy <br />
            Standard CO2 equiv. mpg data <br />
            Click to see your vehicle's emission <br /> 
          </button >
          <MpgFuelEconomy efficiencyMPG={efficiencyMPG} />
          <hr></hr>
        </li>


        {/* <li className="category-list">
          <button 
            onClick={() => {
              setEmissionToSocial(emissionData['carbon_g']);
            }}
          > Annual consumption relates to social impact
          </button>
          <SocialImpact emissionData={emissionData}  emissionToSocial={emissionToSocial} />  
          <hr></hr>
        </li> */}
        </ul>
        
    </div>
      
    // <div className="category-title">
    //   <p>{pageTitle[insightPage]}</p>
    //   <div className="category-data">{displayPage()}</div>
  );
};

export default Categories;
