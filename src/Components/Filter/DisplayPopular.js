import React from "react";
import PopularSearch from "./PopularSearch";


const DisplayPopular = ({sortingResult, selectedFilterVal}) => {
  // console.log('inside of sorting displays');
  // console.log('soring result');
  // console.log(sortingResult);

  if (selectedFilterVal === 'popular_vehicle_make_search') {
    return <PopularSearch sortingResult={sortingResult}/>
  }else if (selectedFilterVal === 'popular_vehicle_model_search'){
    return <PopularSearch sortingResult={sortingResult}/>
  }
}

export default DisplayPopular;