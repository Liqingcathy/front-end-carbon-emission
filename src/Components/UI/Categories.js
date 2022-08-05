import React, { useState } from "react";
import "./Categories.css";

const Categories = ({ getFuelEfficiencyInsight, userData }) => {
  const [modelData, setModelData] = useState("");
  console.log("inside of categories");
  console.log(userData["data"]);
  return (
    <div className='category-container'>
      <h3>Clicks each category to see insight based on your vechicle CO2 estimation</h3>
      <ul className='category-items'>
        <li>
          <button
            onClick={() => {
              getFuelEfficiencyInsight(
                userData["data"]["attributes"]["vehicle_make"]
              );
            }}
          > Your Fuel Economy
          </button>
        </li>
        <li><button>Personal Missions</button></li>
        <li><button>Social Missions</button></li>
      </ul>
      
    </div>
  );
};

export default Categories;
