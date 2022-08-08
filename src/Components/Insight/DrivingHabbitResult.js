import React from "react";
// import { ResponsiveContainer, LineChart, Line,  XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const DrivingHabbitResult = ({ fuelCost, costDrive25Mile, annualFuelConsumption}) => {
  
    return (
      <div className='recommendmpations'>
        <p>Annual Fuel Cost ${fuelCost}</p>
        <p>Cost ${costDrive25Mile} to drive 25 mile</p>
        <p>Annual Oil Consumption {annualFuelConsumption} <br/>(unit:42 gallons)</p>
      </div>
    )
  };
  
export default DrivingHabbitResult;
