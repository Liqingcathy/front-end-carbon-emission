import React from "react";
import './insightsSection.css';
// import { ResponsiveContainer, LineChart, Line,  XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const DrivingHabbit = ({efficiencyMPG, userEmission}) => {
  console.log('inside emission insight category')
  console.log(`userEmission ${JSON.stringify(userEmission)}`)
  let annualEmission = 0;
  const displayEmission= () => {
          return Object.values(efficiencyMPG).map((value) => {
            annualEmission = parseFloat(value['_source']["annualOilConsumption(42gallon)"] * 42 *8887).toFixed(2)
            return (
              <div>
                <p>Annual Fuel Cost {value['_source']["annualFuelCostSF($)"]}</p>
                <p>Annual Petroleum Consumption {parseFloat(value['_source']["annualOilConsumption(42gallon)"] * 42).toFixed(2)} gallons</p>
                <p>8887 grams co2/gallon from a gallon of gasoline</p>
                <p>Annual Emission {annualEmission} gram - {parseFloat(annualEmission/1000000).toFixed(2)} mt</p>
              </div>
            );
          });
         };

  if (userEmission.length === 0) {
      return   <div className="insight-result-section-emit"></div>
  }else{
    return (
      <div className="insight-result-section-emit">
        <p>Your total emission for this trip {userEmission['carbon_g']} g </p>
        <p>Your emission per mile {parseFloat(userEmission['carbon_g']/userEmission['distance_value']).toFixed(2)} g</p>
        <p>EPA standard emission per mile 166 </p>
        {/* <p>Your weekly driving frequency {userInput['frequency']}</p> */}
        {/* <p>Your anual co2 emissions ~ {parseFloat(emissionData['carbon_g']/emissionData['distance_value']).toFixed(2) * userInput['frequency']*4*12}</p> */}
        {displayEmission()}
    </div>
    )
    }
  };

export default DrivingHabbit;
