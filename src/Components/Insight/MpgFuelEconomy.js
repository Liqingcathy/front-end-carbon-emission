import React from "react";
import MpgResult from "./MpgResult";
import "./insightsSection.css";

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

  return (
    <div className='chart-weight'>
      {displayFuelEconomy(efficiencyMPG)}
    </div>
  );
};

export default MpgFuelEconomy;
