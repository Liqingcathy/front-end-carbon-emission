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
  const [userEmission, setUserEmission] = useState([]);
  const [emissionToSocial, setEmissionToSocial] = useState(0);
  return (
    <div className='category-container'>
      <ul className='category-items'>
        <li className="category-list">
          <button className="dark"
            onClick={() => {
              getFuelEfficiencyInsight(
                userData["data"]["attributes"]["vehicle_model"] + "-" +userData["data"]["attributes"]["vehicle_year"]
                );
            }}
          > Your Vehicle's Fuel Economy
          </button >
          
          <MpgFuelEconomy efficiencyMPG={efficiencyMPG} />
          
          <hr></hr>
        </li>
        <li className="category-list">
          <button 
            onClick={() => {
              setUserEmission(emissionData);
            // getUserEmission(userInput['user_name'])
            }}
            > Your Vehicle's CO2 Emission 
          </button>
          <EmissionInsight efficiencyMPG={efficiencyMPG} userEmission={userEmission} />
          
          <hr></hr>
        </li>
        <li className="category-list">
          <button  className="dark"
            onClick={() => {
              setEmissionToSocial(emissionData['carbon_g']);
            }}
          > Annual consumption relates to social impact
          </button>
          <SocialImpact emissionData={emissionData}  emissionToSocial={emissionToSocial} />  
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
