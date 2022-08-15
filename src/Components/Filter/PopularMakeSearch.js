import React from "react";
import "./DisplayItems.css";

const PopularMakeSearch = ({sortingResult}) => {
  // console.log('inside of popular make search');
  // console.log(sortingResult);

  
    return Object.values(sortingResult).map(( value) => {
      return (
          <li className="popular-search-li">
              {value['id']}
              {value['_source']['brand_name']}
              {value['_source']['model_name']}
              {value['_source']['distance_value']}mile
              {value['_source']['emission']}g
              {value['_source']['emission_per_mile']}g
          </li>
      )
      }
    )
}

export default PopularMakeSearch;