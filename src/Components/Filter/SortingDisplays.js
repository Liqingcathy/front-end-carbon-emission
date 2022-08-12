import React from "react";
import PopularModelSearch from "../Filter/PopularModelSearch";
import PopularMakeSearch  from "../Filter/PopularMakeSearch";
import SameMakeDiffModel from "./SameMakeDiffModel";

const SortingDisplays = ({sortingResult, emissionData}) => {
  // console.log('inside of sorting displays');
  // console.log(sortingResult);
  return (
    <div className="sorting-display-container"> 
      <PopularModelSearch sortingResult={sortingResult}/>
      <PopularMakeSearch sortingResult={sortingResult}/>
      <SameMakeDiffModel sortingResult={sortingResult}  emissionData={emissionData}/>
    </div>
  )
}

export default SortingDisplays;