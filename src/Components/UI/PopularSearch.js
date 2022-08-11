import React from "react";

const PopularSearch = ({sortingResult}) => {
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
              
              {value['key']}
            
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

export default PopularSearch;