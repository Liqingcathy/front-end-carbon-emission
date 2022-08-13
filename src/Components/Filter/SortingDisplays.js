import React from "react";
import PopularMakeSearch  from "../Filter/PopularMakeSearch";
import PopularModelSearch from "../Filter/PopularModelSearch";
import SameMakeDiffModel from "../Filter/SameMakeDiffModel";
const SortingDisplays = ({sortingResult, selectedFilterVal}) => {
  console.log('inside of sorting displays');
  console.log('soring result');
  console.log(sortingResult);
  console.log(selectedFilterVal);

  return (
    <div>
      <SameMakeDiffModel sortingResult={sortingResult}/>
      <PopularMakeSearch sortingResult={sortingResult} />
      <PopularModelSearch sortingResult={sortingResult} />
    </div>
  )
//   if (selectedFilterVal === "same_make_diff_model") {
//     return <SameMakeDiffModel sortingResult={sortingResult}/>
//   }
//   else if (selectedFilterVal === "same_model_diff_make_model") {
//     return 
//   }else if (selectedFilterVal === "popular_vehicle_make_search"){
//     return <PopularMakeSearch sortingResult={sortingResult} />
  
//  }else if (selectedFilterVal === "popular_vehicle_model_search") {
//    return <PopularModelSearch sortingResult={sortingResult}/>
//  }
}

export default SortingDisplays;