import React from "react";
import MpgResult from "./MpgResult";
import "./insightsSection.css";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const MpgFuelEconomy = ({ efficiencyMPG }) => {
  // console.log("inside of mpg fuel economy: print efficiencyMPG");
  // console.log(efficiencyMPG);
  const displayFuelEconomy = (res) => {
    return Object.entries(efficiencyMPG).map(([key, value]) => {
      return (
        <MpgResult
          key={value["_source"]["id"]}
          id={value["_source"]["id"]}
          make={value["_source"]["make"]}
          name={value["_source"]["model"]}
          year={value["_source"]["year"]}
          trany={value["_source"]["trany"]}
          combined={value["_source"]["combMPGSF"]}
          city={value["_source"]["singleFuelMpgCity"]}
          highway={value["_source"]["highwayMPGSF"]}
          gallonPerMile={parseFloat(
            100 / value["_source"]["combMPGSF"]
          ).toFixed(2)}
          // gallonPerHundredMile={parseFloat(100/value['_source']["combMPGSF"].toFixed(2))}
          fuelCost={value["_source"]["annualFuelCostSF($)"]}
          costDrive25Mile={
            (value["_source"]["annualFuelCostSF($)"] / 15000) * 25
          }
          annualFuelConsumption={parseFloat(
            value["_source"]["annualOilConsumption(42gallon)"]
          ).toFixed(2)}
        />
      );
    });
  };

  const data = [
    {'name': 'MPG combined',  'mpg': 20}, 
    {'name': 'MPG city', 'mpg': 30}, 
    {'name': 'MPG highway','mpg': 40}, 
    ];
  
  if (efficiencyMPG.length === 0 || efficiencyMPG === null) {
    return (
      <BarChart width={400} height={300} data={data}>
        {/* <CartesianGrid strokeDasharray="1 1" /> */}
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="mpg" fill="#913339" />
        <Bar dataKey="mpg" fill="#413330" />
    </BarChart>
    )
  }else {

  return (
    <div className='chart-weight'>
      {displayFuelEconomy(efficiencyMPG)}
    </div>
  );
  }
};

export default MpgFuelEconomy;
