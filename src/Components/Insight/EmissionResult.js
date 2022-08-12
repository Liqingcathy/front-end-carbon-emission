import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import "./insightsSection.css";

const EmissionResult = ({ fuelCost, oilConsume }) => {
  // console.log('inside of emission result');
  const data = [
    // {'name': 'emissionMT', 'val': emissionMT},
    // {'name': 'emissionPerMile', 'val': emissionPerMile},
    // {'name': 'yearEmission', 'val': yearEmission},
    {'name': 'fuelCost', 'val' : fuelCost},
    {'name': 'oilConsume', 'val' : oilConsume},
  ];
  console.log(`data ${data}`)
  return (
    <div className="insight-result-section-emit">
      <LineChart width={400} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
      <Line type="monotone" dataKey="val" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  </div>
    // <div>
    //   <p>Your total emission for this trip {userEmission['carbon_g']} g </p>
    //     <p>Your emission per mile {parseFloat(userEmission['carbon_g']/userEmission['distance_value']).toFixed(2)} g</p>
    //     <p>EPA standard emission per mile 166 </p>
    // </div>
  )
 }

export default EmissionResult;