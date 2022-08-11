import React from "react";
// import EmissionResult from "./EmissionResult";
import './insightsSection.css';
import { ResponsiveContainer, LineChart, Line,  XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import EmissionResult from "./EmissionResult";

const EmissionInsight = ({efficiencyMPG, userEmission}) => {
  console.log('inside emission insight category');
  console.log(userEmission);
  // console.log(`userEmission ${JSON.stringify(userEmission)}`)
  // console.log(`userEmission ${JSON.stringify(userEmission)}`)
  // console.log(`efficiencyMPG ${JSON.stringify(efficiencyMPG)}`)
  // const emissionMT= parseFloat(userEmission/1000000).toFixed(2);
  // const emissionPerMile = parseFloat(emissionMT/userEmiDistanceVal).toFixed(4);
  // const yearEmission = emissionMT*4*12
  // const data = [
  //   {'name': 'emissionMT', 'val': emissionMT},
  //   {'name': 'emissionPerMile', 'val': emissionPerMile},
  //   {'name': 'yearEmission', 'val': yearEmission},
  //   {'name': 'fuelCost', 'val' : 0},
  //   {'name': 'oilConsume', 'val' : 0},
  // ];

  // console.log(`data ${JSON.stringify(data)}`)
  // data['yearemission'] = parseFloat(value['_source']["annualOilConsumption(42gallon)"] * 42 *8887/1000000).toFixed(2)
  // data['fuel']= value['_source']["annualFuelCostSF($)"]
  // data['annualPetroleumConsumption']=parseFloat(value['_source']["annualOilConsumption(42gallon)"] * 42).toFixed(2)

  const displayEconomy = () => {
      return Object.values(efficiencyMPG).map((value) => {
        return (
          <EmissionResult 
          key={value['_source']["annualFuelCostSF($)"]}
          id={value['_id']}
          fuelCost={value['_source']["annualFuelCostSF($)"]}
          oilConsume={parseFloat(value['_source']["annualOilConsumption(42gallon)"]).toFixed(2)}
        //   <LineChart width={400} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        //   <Line type="monotone" dataKey="total" stroke="#8884d8" />
        //   <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        //   <XAxis dataKey="yeaemission" />
        //   <YAxis />
        //   <Tooltip />
        // </LineChart>
        />
      )
    }
  )};

  // const displayEmission = () => {
  //   return Object.values(data).map((value) => {
  //     return (
  //       <div>
  //         {value['total']}
  //         {value['emissionpermile']}
  //         {value['yearemission']}
  //     </div>
  //     )
  //   }
  //   )
  // }

  //check user emission object is null
  // if (data['fuel'] === 0 || data['oil'] === 0){
  //     <div className="chart-weight"></div>
  // }else{
    return (
      <div className="chart-weight">
        {displayEconomy()}
    </div>
    )
  };
//};
export default EmissionInsight;

 // <div>
          //   <p>Annual Fuel Cost {value['_source']["annualFuelCostSF($)"]}</p>
          //   <p>Annual Petroleum Consumption {parseFloat(value['_source']["annualOilConsumption(42gallon)"] * 42).toFixed(2)} gallons</p>
          //   <p>8887 grams co2/gallon from a gallon of gasoline</p>
          //   <p>Annual Emission {annualEmission} gram - {parseFloat(annualEmission/1000000).toFixed(2)} mt</p>
          // </div>