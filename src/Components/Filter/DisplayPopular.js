import React from "react";
import PopularModelSearch from "../Filter/PopularModelSearch";
import PopularMakeSearch from "../Filter/PopularMakeSearch";
const DisplayPopular = ({sortingResult, selectedFilterVal}) => {
  // console.log('inside of sorting displays');
  // console.log('soring result');
  // console.log(sortingResult);

  if (selectedFilterVal === 'popular_vehicle_make_search') {
    return <PopularMakeSearch sortingResult={sortingResult}/>
  }else if (selectedFilterVal === 'popular_vehicle_model_search'){
    return <PopularModelSearch sortingResult={sortingResult}/>
  }
}

export default DisplayPopular;