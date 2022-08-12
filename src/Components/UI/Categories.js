import React, {useState} from "react";
import "./Categories.css";
import MpgFuelEconomy from "../Insight/MpgFuelEconomy";
import EmissionInsight from "../Insight/EmissionInsight";
import SocialImpact from "../Insight/SocialImpact";
const Categories = ({ getFuelEfficiencyInsight, userData, efficiencyMPG, emissionData, userInput}) => {
  console.log("inside of categories component");
  // console.log(`userInput ${JSON.stringify(userInput)}`)
  console.log(`userInput-user_name ${JSON.stringify(userInput['user_name'])}`)
  console.log(`emissionData ${JSON.stringify(emissionData)}`);
  console.log(`userData ${JSON.stringify(userData)}`);
  console.log(`userInput ${JSON.stringify(userInput)}`);

  const [userEmission, setUserEmission] = useState(0);
  // const [userEmiDistanceVal, setUserEmiDistanceVal] = useState(0);
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
          > Your Vehicle's Fuel Economy <br />
            the higher mpg, the more efficient your vehicle
          </button >
          
          <MpgFuelEconomy efficiencyMPG={efficiencyMPG} />
          
          <hr></hr>
        </li>
        <li className="category-list">
          <button 
            onClick={() => {
              setUserEmission(emissionData['carbon_g']);
              // setUserEmiDistanceVal(emissionData['distance_value'])

            // getUserEmission(userInput['user_name'])
            }}
            > Your Vehicle's CO2 Emission 
          </button>
          <EmissionInsight efficiencyMPG={efficiencyMPG} userEmission={userEmission}/>
          
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
