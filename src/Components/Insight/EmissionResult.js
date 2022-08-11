import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import "./insightsSection.css";

const EmissionResult = ({ efficiencyMPG, emissionGram, emissionPerMile}) => {
  const data = [{
    total:emissionGram/1000000,
    emissionpermile: emissionPerMile/1000000,
    yearemission: emissionGram/1000000*4*12,
    fuel:efficiencyMPG[0]['_source']["annualFuelCostSF($)"],
    oil:efficiencyMPG[0]['_source']["annualOilConsumption(42gallon)"]

  }];
  console.log('inside of emission result');
  console.log(data);

  if (data.length === 0) {
    return   <div className="insight-result-section-emit"></div>
  }else{
  return (
    <div className="insight-result-section-emit">
      <LineChart width={400} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
      <Line type="monotone" dataKey="total" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="yeaemission" />
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
}

export default EmissionResult;