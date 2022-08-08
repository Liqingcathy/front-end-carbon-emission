import React , {useState} from "react";
import DrivingHabbitResult from "./DrivingHabbitResult";
// import { ResponsiveContainer, LineChart, Line,  XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const DrivingHabbit = ({emissionData, efficiencyMPG}) => {
  console.log(`efficiencyMPG ${JSON.stringify(efficiencyMPG)}`);
    return (
      <div>
        <ul className='result-list'>
          <li></li>
        </ul>
    </div>
    )
  };

export default DrivingHabbit;
