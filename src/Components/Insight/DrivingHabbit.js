import React , {useState} from "react";
import { isConstructorDeclaration } from "typescript";
import DrivingHabbitResult from "./DrivingHabbitResult";
// import { ResponsiveContainer, LineChart, Line,  XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const DrivingHabbit = ({efficiencyMPG, emissionData}) => {
  console.log('inside driving habbit result')
  // console.log(`emissionData ${JSON.stringify(emissionData)}`)
  // console.log(`efficiencyMPG ${JSON.stringify(efficiencyMPG)}`);
  // const displayEmission= (res) => {
  //         return Object.entries(emissionData).map(([key, value]) => {
  //           return (
  //             <div>
  //               key={value['carbon_g']}
  //               id={value['carbon_g']}
  //               totalMiles={value['distance_value']}
  //             </div>
  //           );
  //         });
  //       };
    return (
      <div className='mission-container'>
      <p>yor emission {emissionData['carbon_g']} </p>
      <p>your emission per mile {emissionData['carbon_g']/emissionData['distance_value']}</p>
      <p>driving frequency</p>
    </div>
    )
  };

export default DrivingHabbit;
