import React from "react";
import MpgResult from "./MpgResult";

const MpgFuelEconomy = ({efficiencyMPG}) => {
  console.log('inside of mpg fuel economy: print efficiencyMPG');
  console.log(efficiencyMPG)
  const displayFuelEconomy= (res) => {
        return Object.entries(efficiencyMPG).map(([key, value]) => {
          return (
            <MpgResult
              key={value['_source']["id"]}
              id={value['_source']['id']}
              name={value['_source']["model"]}
              year={value['_source']["year"]}
              trany={value['_source']["trany"]}
              combined={value['_source']["combMPGSF"]}
              city={value['_source']["singleFuelMpgCity"]}
              highway={value['_source']["highwayMPGSF"]}
              // gallonPerHundredMile={parseFloat(100/value['_source']["combMPGSF"].toFixed(2))}
              fuelCost={value['_source']["annualFuelCostSF($)"]}
              costDrive25Mile={value['_source']["annualFuelCostSF($)"]/15000*25}
              annualFuelConsumption={value['_source']["annualOilConsumption(42gallon)"]}
            />
          );
        });
      };
      
  return (
    <div className='mission-container'>
      <ul className='category-items'>
        <li>{displayFuelEconomy(efficiencyMPG)}</li>
      </ul>
    </div>
  );
};

export default MpgFuelEconomy;
