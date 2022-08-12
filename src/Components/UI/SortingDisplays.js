import React from "react";
import PopularSearch from "./PopularModelSearch";

const SortingDisplays = ({sortingResult}) => {
  // console.log('inside of sorting displays');
  // console.log(sortingResult);
  return (
    <div className="sorting-display-container"> 
      <PopularSearch sortingResult={sortingResult}/>
    </div>
  )
}

export default SortingDisplays;