import React from "react";
// import EmissionResult from "./EmissionResult";
import './insightsSection.css';
import { ResponsiveContainer, LineChart, Line,  XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const DrivingHabbit = ({efficiencyMPG, userEmission}) => {
  console.log('inside emission insight category')
  // console.log(`userEmission ${JSON.stringify(userEmission)}`)
  console.log(`userEmission ${JSON.stringify(userEmission)}`)
  console.log(`efficiencyMPG ${JSON.stringify(efficiencyMPG)}`)
  const emissionGram = userEmission['carbon_g'];
  const emissionPerMile = parseFloat(userEmission['carbon_g']/userEmission['distance_value']).toFixed(2);
  
  const data = [{
    total:emissionGram,
    emissionpermile: emissionPerMile,
    yearemission: 0,
    fuel: 0,
    oil:0,

  }];

  // data['yearemission'] = parseFloat(value['_source']["annualOilConsumption(42gallon)"] * 42 *8887/1000000).toFixed(2)
  // data['fuel']= value['_source']["annualFuelCostSF($)"]
  // data['annualPetroleumConsumption']=parseFloat(value['_source']["annualOilConsumption(42gallon)"] * 42).toFixed(2)

  const displayEmission = () => {
      return Object.values(efficiencyMPG).map((value) => {
        return (
        <LineChart width={400} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="total" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="yeaemission" />
        <YAxis />
        <Tooltip />
      </LineChart>
      )
    }
  )};
  
    return (
      <div className="chart-weight">
        {/* {emissionGram}
        {emissionPerMile} */}
        {/* <p>Your total emission for this trip {userEmission['carbon_g']} g </p>
        <p>Your emission per mile {parseFloat(userEmission['carbon_g']/userEmission['distance_value']).toFixed(2)} g</p>
        <p>EPA standard emission per mile 166 </p> */}
        {displayEmission()}
    </div>
    )
  };

export default DrivingHabbit;

 // <div>
          //   <p>Annual Fuel Cost {value['_source']["annualFuelCostSF($)"]}</p>
          //   <p>Annual Petroleum Consumption {parseFloat(value['_source']["annualOilConsumption(42gallon)"] * 42).toFixed(2)} gallons</p>
          //   <p>8887 grams co2/gallon from a gallon of gasoline</p>
          //   <p>Annual Emission {annualEmission} gram - {parseFloat(annualEmission/1000000).toFixed(2)} mt</p>
          // </div>