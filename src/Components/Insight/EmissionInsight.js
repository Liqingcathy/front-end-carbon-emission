import React from "react";
// import EmissionResult from "./EmissionResult";
import './insightsSection.css';
import { BarChart, Bar, LineChart, Line,  XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import EmissionResult from "./EmissionResult";

const EmissionInsight = ({efficiencyMPG, userEmission}) => {
  // console.log('inside emission insight category');
  // console.log(`userEmission ${JSON.stringify(userEmission)}`)
  const data = [
    {'name': 'emission', 'val': userEmission['carbon_g'], 'sval': 300},
    {'name': 'permile', 'val':  parseFloat(userEmission['carbon_g']/userEmission['distance_value']).toFixed(2), 'sval': 166},
    {'name': 'yearemit', 'val': userEmission['carbon_g']*4*12, 'sval': 500000},
    // {'name': '$fuel', 'val' : 0},
    // {'name': 'oil', 'val' : 0},
  ];
  console.log('data inside of emission insight')
  console.log(data)
  
  // const displayEconomy = () => {
  //     return Object.values(efficiencyMPG).map((value) => {
  //       return (
  //         <EmissionResult 
  //         key={value['_source']["annualFuelCostSF($)"]}
  //         id={value['_id']}
  //         fuelCost={value['_source']["annualFuelCostSF($)"]}
  //         oilConsume={parseFloat(value['_source']["annualOilConsumption(42gallon)"]).toFixed(2)}
  //         // emissionData={emissionData}
  //         data={data}
  //        />
  //      )
  //   })
  // }   


  const data2 = [
    {'name': '2023',  'val': 166 }, 
    {'name': '2024', 'val': 158}, 
    {'name': '2025', 'val': 149}, 
    {'name': '2026', 'val': 132}
    ];
  if (userEmission === null || userEmission.length === 0) {
    return (
      <div className="chart-weight">
        {/* {displayEconomy()} */}
      <LineChart width={600} height={300} data={data2} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="val" stroke="#913339" />
        <Line type="monotone" dataKey="sval" stroke="#913339" />
        {/* <CartesianGrid stroke="#ccc" strokeDasharray="5 5" /> */}
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
      </div>
      )
  }
 
    return (
      <div className="chart-weight">
        {/* {displayEconomy()} */}
      <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
      <Line type="monotone" dataKey="val" stroke="#913339" />
      <Line type="monotone" dataKey="sval" stroke="#213330" />
      {/* <CartesianGrid stroke="#ccc" strokeDasharray="5 5" /> */}
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
    </LineChart>
      </div>
      )
};
export default EmissionInsight;