import React, {useState} from "react";
import "./Categories.css";
import MpgFuelEconomy from "../Insight/MpgFuelEconomy";
import EmissionInsight from "../Insight/EmissionInsight";
import SocialImpact from "../Insight/SocialImpact";
const Categories = ({ getFuelEfficiencyInsight, userData, efficiencyMPG, emissionData, getUserEmission, userInput, userDb, getUSHistoricalEmission}) => {
  console.log("inside of categories");
  // console.log(`userInput ${JSON.stringify(userInput)}`)
  console.log(`userInput-user_name ${JSON.stringify(userInput['user_name'])}`)
  console.log(emissionData['carbon_g']);
  const [emissionToSocial, setEmissionToSocial] = useState(0);
  return (
    <div className='category-container'>
      <ul className='category-items'>
        <li>
          <button
            onClick={() => {
              getFuelEfficiencyInsight(
                userData["data"]["attributes"]["vehicle_model"] + "-" +userData["data"]["attributes"]["vehicle_year"]
                );
            }}
          > Your Vehicle's Fuel Economy
          </button >
          <div className="chart-one">
          <MpgFuelEconomy efficiencyMPG={efficiencyMPG} />
          </div>
          <hr></hr>
        </li>
        <li>
          <button
            onClick={() => {
            getUserEmission(userInput['user_name'])
            }}
            > Your Vehicle's CO2 Emission 
          </button>
          <div className="chart-one">
          <EmissionInsight emissionData={emissionData} efficiencyMPG={efficiencyMPG} userDb={userDb} userInput={userInput} />
          </div>
          <hr></hr>
        </li>
        <li>
          <button 
            onClick={() => {
              setEmissionToSocial(emissionData['carbon_g']);
            }}
          > Impact on Climate Change
          </button>
          <div className="chart-one">
          <SocialImpact emissionData={emissionData}  emissionToSocial={emissionToSocial} />  
          </div>
          <hr></hr>
        </li>
        </ul>
        
    </div>
      
    // <div className="category-title">
    //   <p>{pageTitle[insightPage]}</p>
    //   <div className="category-data">{displayPage()}</div>
  );
};

export default Categories;
