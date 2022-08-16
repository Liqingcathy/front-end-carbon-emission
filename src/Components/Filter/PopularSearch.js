import React from "react";
import "./DisplayItems.css";
const PopularModelSearch = ({sortingResult}) => {
  // console.log('inside of popular search');
  // console.log(sortingResult);
  // const top_5_models = sortingResult;
  // console.log(top_5_models);
  const displayPS = () => {
    return Object.values(sortingResult).map(( value) => {
      return (
        // <div className="popular-search-div">
          <ul className="popular-search-ul">
            {/* <li className="popular-search-li"> */}
              {/* {value['id']} */}
              <p className="title-h2">
                <span>{value['_source']['brand_name']}</span>
                <span>{value['_source']['model_name']}</span>
              </p>
              <p className="title-h3">
                <span>{value['_source']['distance_value']} mile</span>
                <span>{value['_source']['emission']} g</span>
                <span>{value['_source']['emission_per_mile']} g</span>
              </p>
            {/* </li> */}
          </ul>
        // </div>
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