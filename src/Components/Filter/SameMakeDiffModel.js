import React from "react";
import car from "../../Assets/car.png";
import "./DisplayItems.css";

const SameMakeDiffModel = ({sortingResult}) => {
  // console.log('inside of SameMakeDiffModel');
  // console.log(sortingResult);
  // const displaySameMakeDiffModel= () => {
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
            {value["_source"]["year"]}
            {value["_source"]["combMPGSF"]}
            {value['_source']['singleFuelMpgCity']}
            {value['_source']['highwayMPGSF']}
            {value['_source']['trany']}
            {value['_source']['VsizeClass']}
            {value['_source']['fuelType1']}
            {value['_source']['annualFuelCostSF($)']}
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


export default SameMakeDiffModel;