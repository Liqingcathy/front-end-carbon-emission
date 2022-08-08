import React, { useState } from "react";
import "./Categories.css";

const Categories = ({ getFuelEfficiencyInsight, userData, efficiencyMPG, emissionData, getUserEmission}) => {
  console.log("inside of categories");
  console.log(userData["data"]);
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
          </button>
          <div className="chart-one">
          
          </div>
          <hr></hr>
        </li>
        <li>
          <button
          
          
            > Driving Habit
            </button>
          <div className="chart-one">
          
          </div>
          <hr></hr>
        </li>
        <li>
          <button > Social Impact
          </button>
          <div className="chart-one">
            
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
