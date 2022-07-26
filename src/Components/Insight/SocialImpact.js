import React from "react";
import './insightsSection.css';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

// import { ResponsiveContainer, LineChart, Line,  XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const SocialImpact = ({emissionToSocial, emissionData}) => {
  // console.log('inside of social impact');
  // console.log(emissionToSocial);
  //caculate equivalent value based on epa caculation formula(unit:metric ton)
  const emissionToSocialMT = parseFloat(emissionToSocial / 1000000).toFixed(3);
  const electricityConsumed = parseFloat(emissionToSocialMT /5.139).toFixed(3) ;
  const homeEnergy = parseFloat(emissionToSocialMT / 7.94).toFixed(3);
  const switchToLED = parseFloat(emissionToSocialMT / 0.0264).toFixed(2);
  const totalTreeSeedlingGrowTenYears = parseFloat(emissionToSocialMT / 0.00000822).toFixed(0);
  const acreForest_16tenniscourts = parseFloat(emissionToSocialMT / 0.84).toFixed(2);
  const coarBurnedPound = parseFloat(emissionToSocialMT / 0.000904).toFixed(2);
  //avoid
  const wasteRecycled = parseFloat(emissionToSocialMT / 2.89).toFixed(3);
  const garbageTrucksWasteNumber = parseFloat(emissionToSocialMT / 20.23).toFixed(3);
  const trashBagWasteNumber = parseFloat(emissionToSocialMT / 0.0231).toFixed(3);
  const numberOfPhoneCharged = parseFloat(emissionToSocialMT / 0.00000822).toFixed(2);

  const data = [
    {'name': 'emission', 'val' : emissionToSocialMT}, 
    {'name': 'electricity', 'val': electricityConsumed }, 
    {'name': 'home', 'val': homeEnergy }, 
    {'name': 'LED', 'val':switchToLED}, 
    // {'name': 'Tree', 'val': totalTreeSeedlingGrowTenYears}, 
    {'name': 'Forest', 'val':acreForest_16tenniscourts},
    // {'name': 'Coar', 'val': coarBurnedPound},
    {'name': 'Waste', 'val': wasteRecycled},
    {'name': 'GarbageTruck', 'val': garbageTrucksWasteNumber},
    {'name': 'TrashBag', 'val': trashBagWasteNumber},
    // {'name': 'Phone Charge', 'val':numberOfPhoneCharged}

 ];

 const data2 = [
    {'name': 'emission', 'val' : 33}, 
    {'name': 'electricity', 'val': 44 }, 
    {'name': 'home', 'val': 55 }, 
    {'name': 'LED', 'val':66}, 
    {'name': 'Tree', 'val': 55}, 
    {'name': 'Forest', 'val':9},
    {'name': 'Coar', 'val': 890},
    {'name': 'Waste', 'val': 333},
    {'name': 'GarbageTruck', 'val': 333},
    {'name': 'TrashBag', 'val': 222},
    {'name': 'Phone Charge', 'val': 678}
 ]

 if (emissionToSocial === 0) {
  return <div className="chart-weight">
     <BarChart width={400} height={300} data={data2}>
        {/* <CartesianGrid strokeDasharray="1 1" /> */}
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="val" fill="#913339" />
        {/* <Bar dataKey="val" fill="#913339" /> */}
  {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
      </BarChart>
  </div>
 }else{
    return(
      <div className="chart-weight">
       <BarChart width={400} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="val" fill="#913339" />
        {/* <Bar dataKey="val" fill="#913339" /> */}
  {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
      </BarChart>
    </div>
    
  );
  }
  // if (emissionToSocial === 0) {
  //     return  <div className="insight-result-section-social"></div>
  // }else{
  // return (
  //   <div className="insight-result-section-social">
  //     <p>your annual vehicle co2 emission {emissionToSocialMT} mt</p>
  //     <p>{electricityConsumed} mt annual electricity consumed</p>
  //     <p>{homeEnergy} mt annual home energy consumed</p>
  //     <p>{switchToLED} mt incandescent bulbs switched to LED </p>
  //     <p>{totalTreeSeedlingGrowTenYears} urban tree seedlings grow for 10 years </p>
  //     <p>{acreForest_16tenniscourts} acre forest preserved</p>
  //     <p>{coarBurnedPound} pounds of carbon burned</p>
  //     <p>{wasteRecycled} mt of wastes recycled</p>
  //     <p>{garbageTrucksWasteNumber} mt garbage trucks waste</p>
  //     <p>{trashBagWasteNumber}mt trash bags recycled</p>
  //     <p>{numberOfPhoneCharged} of smart phone chared</p>
  //   </div>
  //  );
  //}
};

export default SocialImpact;
