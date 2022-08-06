import React, { useState } from "react";
import "./RecMissionsList.css";
import MpgFuelEconomy from "./MpgFuelEconomy";

const RecMissionsList = ({ efficiencyMPG }) => {
  const displayMissionsList = (res) => {
    //return props.displaSearchRes.map((result) => {
    return Object.entries(efficiencyMPG).map(([key, value]) => {
      return (
        <MpgFuelEconomy
          key={value['_source']["model"]}
          id={value['_source']["_id"]}
          name={value['_source']["model"]}
          year={value['_source']["year"]}
          combined={value['_source']["combMPGSF"]}
          city={value['_source']["singleFuelMpgCity"]}
          highway={value['_source']["highwayMPGSF"]}
          fuelCost={value['_source']["annualFuelCostSF($)"]}
          annualFuelConsump={value['_source']["annualOilConsumption(42gallon)"]}
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
