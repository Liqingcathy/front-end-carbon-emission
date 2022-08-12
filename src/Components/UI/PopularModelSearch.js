import React from "react";

const PopularModelSearch = ({sortingResult}) => {
  console.log('inside of popular search');
  console.log(sortingResult);
  // const top_5_models = sortingResult;
  // console.log(top_5_models);
  const displayPS = () => {
    return Object.values(sortingResult).map(( value) => {
      return (
        <div className="popular-search-div">
          <ul className="popular-search-ul">
            <li className="popular-search-li">
              {value['_source']['brand_name']}
              {value['_source']['model_name']}
              {value['_source']['distance_value']}mile
              {value['_source']['emission']}g
              {value['_source']['emission_per_mile']}g
            </li>
          </ul>
        </div>
      )
      }
    )
  }


  return (
    <div className="popular-search">
    {displayPS()}
    </div>
  )
}

export default PopularModelSearch;