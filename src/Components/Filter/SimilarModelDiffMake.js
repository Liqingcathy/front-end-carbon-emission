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
        <div>
          <ul className='popular-search-ul' key={value["id"]}>
            <li className="car-icon"><img alt='car-icon' src={car}/></li>
              <li className="car-desc">
                <p>
                  <span>{value["_source"]["make"]}</span>
                  <span>{value["_source"]["model"]}</span>
                  <span>{value["_source"]["year"]}</span>
                </p>
                <p>
                  <span>{value["_source"]["combMPGSF"]}</span>
                  <span>{parseFloat(
                  value["_source"]["annualOilConsumption(42gallon)"]
                ).toFixed(2)}</span>
                </p>
            </li>
          </ul>
        </div>
      );
    });
  };

  return <div className='popular-search'>{displayCars()}</div>;
};

export default SimilarModelDiffMake;
