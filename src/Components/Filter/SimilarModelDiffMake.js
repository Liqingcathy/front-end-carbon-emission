import React, { useState } from "react";
import car from "../../Assets/car.png";
import "./DisplayItems.css";

const SimilarModelDiffMake = ({ sortingResult }) => {
  console.log("inside of SameMakeDiffModel");
  // console.log(sortingResult.length);
  // const displaySameMakeDiffModel= () => {
  // const [cars, setCars] = useState(sortingResult.slice(0, 30));

  const displayCars = () => {
    return Object.values(sortingResult).map((value) => {
      return (
        <ul className='popular-search-ul' key={value["id"]}>
          {/* <ul className="car-result-ul"> 
              <li className="car-result-li"> */}
          <img alt='car-icon' src={car} />
          <div className="car-text-container">
            {value["_source"]["make"]}
            {value["_source"]["model"]}
            {value["_source"]["combMPGSF"]}
            {value["_source"]["year"]}
            {parseFloat(
              value["_source"]["annualOilConsumption(42gallon)"]
            ).toFixed(2)}
          </div>
        </ul>
      );
    });
  };

  return <div className='popular-search'>{displayCars()}</div>;
};

export default SimilarModelDiffMake;
