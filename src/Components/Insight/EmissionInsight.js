import React from "react";
// import EmissionResult from "./EmissionResult";
import './insightsSection.css';
import { BarChart, Bar, LineChart, Line,  XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import EmissionResult from "./EmissionResult";

const EmissionInsight = ({efficiencyMPG, userEmission}) => {
  // console.log('inside emission insight category');
  // console.log(`userEmission ${JSON.stringify(userEmission)}`)
  const data = [
    {'name': 'emission', 'user': userEmission['carbon_g']},
    {'name': 'permile', 'user':  parseFloat(userEmission['carbon_g']/userEmission['distance_value']).toFixed(2)},
    {'name': 'yearemit', 'user': userEmission['carbon_g']*4*12},
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
    {'name': '2023',  'standard': 166 }, 
    {'name': '2024', 'standard': 158}, 
    {'name': '2025', 'standard': 149}, 
    {'name': '2026', 'standard': 132}
    ];
  if (userEmission === null || userEmission.length === 0) {
    return (
      <div className="chart-weight">
        {/* {displayEconomy()} */}
      <LineChart width={600} height={300} data={data2} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="standard" stroke="#913339" />
        {/* <Line type="monotone" dataKey="sval" stroke="#913339" /> */}
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
      <Line type="monotone" dataKey="user" stroke="#913339" />
      {/* <Line type="monotone" dataKey="sval" stroke="#213330" /> */}
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