import React from "react";
// import EmissionResult from "./EmissionResult";
import './insightsSection.css';
// import { ResponsiveContainer, LineChart, Line,  XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import EmissionResult from "./EmissionResult";

const EmissionInsight = ({efficiencyMPG, emissionData}) => {
  // console.log('inside emission insight category');
  // console.log(`efficiencyMPG ${JSON.stringify(efficiencyMPG)}`)
  //[0]['_source']['...']
  // console.log(`emissionData ${JSON.stringify(emissionData)}`)
 
  // const combined = {...efficiencyMPG[0], emissionData};
  // console.log('combined');
  // console.log(combined);
  
  const displayEconomy = () => {
      return Object.values(efficiencyMPG).map((value) => {
        return (
          <EmissionResult 
          key={value['_source']["annualFuelCostSF($)"]}
          id={value['_id']}
          fuelCost={value['_source']["annualFuelCostSF($)"]}
          oilConsume={parseFloat(value['_source']["annualOilConsumption(42gallon)"]).toFixed(2)}
          emissionData={emissionData}
         />
       )
    })
  }   

  //check user emission object is null
  // if (data['fuel'] === 0 || data['oil'] === 0){
  //     <div className="chart-weight"></div>
  // }else{
    return (
      <div className="chart-weight">
        {displayEconomy()}
    </div>
    )
  };
//};
export default EmissionInsight;

 // <div>
          //   <p>Annual Fuel Cost {value['_source']["annualFuelCostSF($)"]}</p>
          //   <p>Annual Petroleum Consumption {parseFloat(value['_source']["annualOilConsumption(42gallon)"] * 42).toFixed(2)} gallons</p>
          //   <p>8887 grams co2/gallon from a gallon of gasoline</p>
          //   <p>Annual Emission {annualEmission} gram - {parseFloat(annualEmission/1000000).toFixed(2)} mt</p>
          // </div>