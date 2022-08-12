import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import "./insightsSection.css";

const EmissionResult = ({ fuelCost, oilConsume, emissionData}) => {
  console.log('inside of emission result');
  
  const data = [
    {'name': 'emission', 'val': emissionData['carbon_g']},
    {'name': 'permile', 'val':  parseFloat(emissionData['carbon_g']/emissionData['distance_value']).toFixed(2)},
    {'name': 'yearemit', 'val': emissionData['carbon_g']*4*12},
    {'name': '$fuel', 'val' : fuelCost},
    {'name': 'oil', 'val' : oilConsume},
  ];
  console.log('data')
  console.log(data)

  return (
    <div className="insight-result-section-emit">
      <LineChart width={400} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
      <Line type="monotone" dataKey="val" stroke="#913339" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  </div>
  )
 }

export default EmissionResult;