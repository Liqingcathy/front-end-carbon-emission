import React, {useState} from "react";
import "./Categories.css";
import { FaBraille, FaRegChartBar} from "react-icons/fa";

import MpgFuelEconomy from "../Insight/MpgFuelEconomy";
import EmissionInsight from "../Insight/EmissionInsight";

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
      <ul className='category-items'> 
        <li className="category-list">
          <button className="category-text"
            onClick={() => {
              setEmissionData(emissionData);
              setUserEmission(emissionData);
            }}
            >         
            <p className="category-click-p">     
              <FaRegChartBar className="category-click-icon" size={50}/>
            </p> 
             Click to See Your Vehicle's  <br/> 
             <span className="chart-em-text">CO2 Emission </span>
            </button> 
            
          <EmissionInsight userEmission={userEmission} emissionData={emissionData} />
          <p className="chart-title">Carbon dioxide (CO2) emission standards</p>
          
        </li>

        <li className="category-list">
          <button className="category-text"
            onClick={() => {
              getFuelEfficiencyInsight(
                userData["data"]["attributes"]["vehicle_model"] + "-" +userData["data"]["attributes"]["vehicle_year"]
                );
            }}
          > 
            <p className="category-click-p">
              <FaRegChartBar className="category-click-icon" size={50}/>
            </p>
              Click to See Your Vehicle's <br /> 
              <span className="chart-em-text">Fuel Economy</span>
          </button >
          <MpgFuelEconomy efficiencyMPG={efficiencyMPG} />
          <p className="chart-title">Standard CO2 equiv. mpg data</p>

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
