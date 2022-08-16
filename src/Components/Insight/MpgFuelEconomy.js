import React from "react";
import MpgResult from "./MpgResult";
import "./insightsSection.css";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const MpgFuelEconomy = ({ efficiencyMPG }) => {
  console.log("inside of mpg fuel economy: efficiencyMPG");
  console.log(efficiencyMPG);

  const copyEfficiencyMpg = {...efficiencyMPG[0]};

  // console.log(copyEfficiencyMpg['combMPGSF']);
  // const data2 = [
  //   {'name': 'mpg',  'mpg': efficiencyMPG[0]['combMPGSF']}, 
  //   {'name': 'city', 'mpg': copyEfficiencyMpg['_source']['singleFuelMpgCity']}, 
  //   {'name': 'highway','mpg': copyEfficiencyMpg['_source']['highwayMPGSF']}, 
  //   {'name': 'standard', 'mpg': 54}
  // ];


  // console.log(data2);
  // const displayFuelEconomy = () => {
  //   return Object.entries(efficiencyMPG).map(([key, value]) => {
  //     return (
  //       <MpgResult
  //         key={value["id"]}
  //         id={value["id"]}
  //         make={value["make"]}
  //         name={value["model"]}
  //         year={value["year"]}
  //         trany={value["trany"]}
  //         combined={value["combMPGSF"]}
  //         city={value["singleFuelMpgCity"]}
  //         highway={value["highwayMPGSF"]}
  //         gallonPerMile={parseFloat(
  //           100 / value["combMPGSF"]
  //         ).toFixed(2)}
  //         // gallonPerHundredMile={parseFloat(100/value['_source']["combMPGSF"].toFixed(2))}
  //         fuelCost={value["annualFuelCostSF($)"]}
  //         costDrive25Mile={
  //           (value["annualFuelCostSF($)"] / 15000) * 25
  //         }
  //         annualFuelConsumption={parseFloat(
  //           value["annualOilConsumption(42gallon)"]
  //         ).toFixed(2)}
  //       />
  //     );
  //   });
  // };

  const data = [
    {'name': '2023',  'mpg': 54}, 
    {'name': '2024', 'mpg': 56}, 
    {'name': '2025','mpg': 60}, 
    {'name': '20236','mpg': 67}
    ];
  
  if (efficiencyMPG.length === 0) {
    return (
      <LineChart width={400} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
      <Line type="monotone" dataKey="mpg" stroke="#913339" />
      {/* <CartesianGrid stroke="#ccc" strokeDasharray="5 5" /> */}
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
    )
  }else {

  return (
    <LineChart width={400} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="mpg" stroke="#913339" />
    {/* <CartesianGrid stroke="#ccc" strokeDasharray="5 5" /> */}
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
  </LineChart>
  );
  }
};

export default MpgFuelEconomy;
