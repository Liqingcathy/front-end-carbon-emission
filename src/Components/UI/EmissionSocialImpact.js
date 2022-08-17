import React from "react";

import {
  BarChart,
  Bar,
  AreaChart,
  Area,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// import { ResponsiveContainer, LineChart, Line,  XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const EmissionSocialImpact = ({ emissionToSocial, emissionData }) => {
  // console.log('inside of social impact');

  //caculate equivalent value based on epa caculation formula(unit:metric ton)
  const emissionToSocialMT = parseFloat(emissionToSocial / 1000000).toFixed(3);
  const electricityConsumed = parseFloat(emissionToSocialMT / 5.139).toFixed(3);
  const homeEnergy = parseFloat(emissionToSocialMT / 7.94).toFixed(3);
  const switchToLED = parseFloat(emissionToSocialMT / 0.0264).toFixed(2);
  const totalTreeSeedlingGrowTenYears = parseFloat(
    emissionToSocialMT / 0.00000822
  ).toFixed(0);
  const acreForest_16tenniscourts = parseFloat(
    emissionToSocialMT / 0.84
  ).toFixed(2);
  const coarBurnedPound = parseFloat(emissionToSocialMT / 0.000904).toFixed(2);
  //avoid
  const wasteRecycled = parseFloat(emissionToSocialMT / 2.89).toFixed(3);
  const garbageTrucksWasteNumber = parseFloat(
    emissionToSocialMT / 20.23
  ).toFixed(3);
  const trashBagWasteNumber = parseFloat(emissionToSocialMT / 0.0231).toFixed(
    3
  );
  const numberOfPhoneCharged = parseFloat(
    emissionToSocialMT / 0.00000822
  ).toFixed(2);

  const dataSmall = [
    { name: "electricity", mt: electricityConsumed },
    { name: "home energy", mt: homeEnergy },
    { name: "LED", mt: switchToLED },
    { name: "Forest", mt: acreForest_16tenniscourts },
    { name: 'Waste', mt: wasteRecycled},
    { name: "Garbage Truck", mt: garbageTrucksWasteNumber },
    { name: "TrashBag", mt: trashBagWasteNumber },
  ];

  const dataBig = [
    { name: "Tree", mt: totalTreeSeedlingGrowTenYears },
    { name: "Coar", mt: coarBurnedPound },
    { name: "Phone Charge", mt: numberOfPhoneCharged },
  ]

  console.log('print data small and big')
  console.log(dataSmall)
  console.log(dataBig)
  const data = [
    // {'name': 'emission', 'val' : emissionToSocialMT},
    { name: "electricity", val: electricityConsumed },
    { name: "home energy", val: homeEnergy },
    { name: "LED", val: switchToLED },
    { name: "Tree", val: totalTreeSeedlingGrowTenYears },
    { name: "Forest", val: acreForest_16tenniscourts },
    { name: "Coar", val: coarBurnedPound },
    // {'name': 'Waste', 'val': wasteRecycled},
    { name: "Garbage Truck", val: garbageTrucksWasteNumber },
    { name: "TrashBag", val: trashBagWasteNumber },
    { name: "Phone Charge", val: numberOfPhoneCharged },
  ];

  //  console.log(data)
  const data2 = [
    // {'name': 'emission', 'val' : 33},
    { name: "electricity", val: 44 },
    { name: "home energy", val: 55 },
    { name: "LED", val: 66 },
    { name: "Tree", val: 55 },
    { name: "Forest", val: 9 },
    { name: "Coar", val: 890 },
    // {'name': 'Waste', 'val': 333},
    { name: "GarbageTruck", val: 333 },
    { name: "TrashBag", val: 222 },
    { name: "Phone Charge", val: 678 },
  ];

  //  console.log('check if emission data or tosocial is null');
  //  console.log(emissionToSocial);
  //  console.log(emissionData);
  if (typeof emissionToSocial === "undefined" || emissionData.length === 0) {
    return (
      <div className='chart-weight'>
        <BarChart width={800} height={300} data={data2}>
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey='val' fill='#913339' />
          {/* <Bar dataKey="val" fill="#913339" /> */}
          {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
        </BarChart>
      </div>
    );
  } else {
    return (
      <div className='chart-weight'>
        <BarChart width={400} height={300} data={dataSmall}>
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey='mt' fill='#913339' />
          {/* <Bar dataKey="val" fill="#913339" /> */}
          {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
        </BarChart>
        <BarChart width={400} height={300} data={dataBig}>
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey='mt' fill='#913339' />
          {/* <Bar dataKey="val" fill="#913339" /> */}
          {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
        </BarChart>
      </div>
    );
  }
};

export default EmissionSocialImpact;
