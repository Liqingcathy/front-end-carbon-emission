import React, { useState } from "react";
import "./RecMissionsList.css";
import RecMission from "./MpgFuelEconomy";
const RecMissionsList = ({ efficiencyMPG }) => {
  const displayMissionsList = (res) => {
    //return props.displaSearchRes.map((result) => {
    return Object.entries(efficiencyMPG).map(([key, value]) => {
      return (
        <RecMission
          key={value['_source']["make"]}
          id={value['_source']["_id"]}
          name={value['_source']["make"]}
          fuelCost={value['_source']["annualFuelCostSF($)"]}
          annualFuelConsump={value['_source']["annualOilConsumption(42gallon)"]}
          combined={value['_source']["combMPGSF"]}
          city={value['_source']["singleFuelMpgCity"]}
          highway={value['_source']["highwayMPGSF"]}
        />
      );
    });
  };
  return (
    <div>
      <ul className='result-list'>{displayMissionsList(efficiencyMPG)}</ul>
    </div>
  );
};

export default RecMissionsList;
