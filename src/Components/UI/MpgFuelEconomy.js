import React from "react";
import { ResponsiveContainer, LineChart, Line,  XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const RecMission = ({ name, year, trany, combined, city, highway, fuelCost, annualFuelConsump, gallonPerHundredMile }) => {
  console.log(`combined ${combined}`);
  console.log(`city ${city}`);
 
  return (
    <div className='mission-container'>
      <h3>MPG fuel economy based on your vehicle CO2 emission</h3>
        <div className='recommendations'>   
        {/* <ResponsiveContainer width="100%" aspect={1}>
          <LineChart 
            width={500} height={250} data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={name} stroke="#8884d8" />
          <Line type="monotone" dataKey="standard" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer> */}
              <p>Your fuel economy <br />{name}({year} {trany})</p>
              <p>Real-World MPG Combined {combined}</p>
              <p>Real-World MPG City {city}</p>
              <p>Real-World MPG Highway {highway}</p>
              <p>Gallon per 100 mile {gallonPerHundredMile}</p>
              <p>Annual Fuel Cost ${fuelCost}</p>
              <p>Annual Oil Consumption {annualFuelConsump} <br/>(unit:42 gallons)</p>
        </div>
    </div>
  );
};

export default RecMission;
