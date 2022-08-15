import React from "react";
// import EmissionResult from "./EmissionResult";
import './insightsSection.css';
import { BarChart, Bar, LineChart, Line,  XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import EmissionResult from "./EmissionResult";

const EmissionInsight = ({efficiencyMPG, emissionData}) => {
  console.log('inside emission insight category');
  // console.log(`efficiencyMPG ${JSON.stringify(efficiencyMPG)}`)
  const data = [
    {'name': 'emission', 'val': emissionData['carbon_g']},
    {'name': 'permile', 'val':  parseFloat(emissionData['carbon_g']/emissionData['distance_value']).toFixed(2)},
    {'name': 'yearemit', 'val': emissionData['carbon_g']*4*12},
    {'name': '$fuel', 'val' : 0},
    {'name': 'oil', 'val' : 0},
  ];
  
  const displayEconomy = () => {
      return Object.values(efficiencyMPG).map((value) => {
        return (
          <EmissionResult 
          key={value['_source']["annualFuelCostSF($)"]}
          id={value['_id']}
          fuelCost={value['_source']["annualFuelCostSF($)"]}
          oilConsume={parseFloat(value['_source']["annualOilConsumption(42gallon)"]).toFixed(2)}
          emissionData={emissionData}
          data={data}
         />
       )
    })
  }   


  const data2 = [
    {'name': 'emission', 'val': 34},
    {'name': 'permile', 'val':  12},
    {'name': 'yearemit', 'val': 4},
    {'name': '$fuel', 'val' : 20},
    {'name': 'oil', 'val' : 20},
  ];
  console.log("data[3]['val'] and data[4]['val']")
  console.log(data[3]['val']);
  console.log(data[4]['val']);

  if (data[3]['val'] === 0 || data[4]['val'] === 0 ) {
    return (<div className="chart-weight">
      <BarChart width={400} height={300} data={data2}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="val" fill="#913339" />
    </BarChart>
   </div>)
  }else {
    return (
      <div className="chart-weight">
        {displayEconomy()}
      </div>
      )
    //}
  };
};
export default EmissionInsight;