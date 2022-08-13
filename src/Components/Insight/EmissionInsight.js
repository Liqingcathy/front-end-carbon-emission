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