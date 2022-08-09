import React from "react";
import './insightsSection.css';
// import { ResponsiveContainer, LineChart, Line,  XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const SocialImpact = ({emissionToSocial, emissionData}) => {
  console.log('inside of social impact');
  console.log(emissionToSocial);
  //caculate equivalent value based on epa caculation formula(unit:metric ton)
  const emissionToSocialMT = parseFloat(emissionToSocial / 1000000).toFixed(3);
  const electricityConsumed = parseFloat(emissionToSocialMT /5.139).toFixed(3) ;
  const homeEnergy = parseFloat(emissionToSocialMT / 7.94).toFixed(3);
  const switchToLED = parseFloat(emissionToSocialMT / 0.0264).toFixed(2);
  const totalTreeSeedlingGrowTenYears = parseFloat(emissionToSocialMT / 0.00000822).toFixed(2);
  const acreForest_16tenniscourts = parseFloat(emissionToSocialMT / 0.84).toFixed(2);
  const coarBurnedPound = parseFloat(emissionToSocialMT / 0.000904).toFixed(2);
  //avoid
  const wasteRecycled = parseFloat(emissionToSocialMT / 2.89).toFixed(3);
  const garbageTrucksWasteNumber = parseFloat(emissionToSocialMT / 20.23).toFixed(3);
  const trashBagWasteNumber = parseFloat(emissionToSocialMT / 0.0231).toFixed(3);
  const numberOfPhoneCharged = parseFloat(emissionToSocialMT / 0.00000822).toFixed(2);

  if (emissionData.length === 0) {
      return  <div className="insight-result-section"></div>
  }else{
  return (
    <div className="insight-result-section">
      <p>{emissionToSocialMT}</p>
      <p>{electricityConsumed}</p>
      <p>{homeEnergy}</p>
      <p>{switchToLED}</p>
      <p>{totalTreeSeedlingGrowTenYears}</p>
      <p>{acreForest_16tenniscourts}</p>
      <p>{coarBurnedPound}</p>
      <p>{wasteRecycled}</p>
      <p>{garbageTrucksWasteNumber}</p>
      <p>{trashBagWasteNumber}</p>
      <p>{numberOfPhoneCharged}</p>
    </div>
    );
  }
};

export default SocialImpact;
