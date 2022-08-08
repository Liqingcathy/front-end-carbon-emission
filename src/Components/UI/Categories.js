import React, { useState } from "react";
import "./Categories.css";
import MpgFuelEconomy from "../Insight/MpgFuelEconomy";
import DrivingHabbit from "../Insight/DrivingHabbit";
import SocialImpact from "../Insight/SocialImpact";
const Categories = ({ getFuelEfficiencyInsight, userData, efficiencyMPG, emissionData, getUserEmission}) => {
  console.log("inside of categories");
 
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
          > Your Fuel Economy
          </button >
          <div className="chart-one">
          <MpgFuelEconomy efficiencyMPG={efficiencyMPG} />
          </div>
          <hr></hr>
        </li>
        <li>
          <button
            onClick={() => {
            getUserEmission(emissionData.data.attributes)
          }}
          
            > Driving Habit
            </button>
          <div className="chart-one">
          <DrivingHabbit emissionData={emissionData} efficiencyMPG={efficiencyMPG}/>
          </div>
          <hr></hr>
        </li>
        <li>
          <button > Social Impact
          </button>
          <div className="chart-one">
          <SocialImpact emissionData={emissionData} />  
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
