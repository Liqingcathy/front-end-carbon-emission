import React from "react";
import SearchResult from "./SearchResult";
import "./SearchResultList.css";

const SearchResultList = (props) => {
  console.log("inside searchresultlist component");

  const getResultList = (res) => {
    //return props.displaSearchRes.map((result) => {
    return  Object.entries(props.displaSearchRes).map(([key, value]) =>{
      return (
        <SearchResult
          key={value['_id']}
          id={value['_id']}
          title={value['_source']['title']} 
          url={value['_source']['url']}
        />
      );
  });
  };
  return (
    <div>
      <h3>search result</h3>
      <ul className='result_list'>{getResultList(props.displaSearchRes)}</ul>
    </div>
  );
  // return (
};
//   <div className="result-container">
//   <h2>Search result</h2>
//   <div className="emission-data">
//     {
//       props.displaSearchRes.map(([key, value])=>
//         <div>{key} is {value}</div>
//        )
//     }
//     </div>
// </div>
// )

export default SearchResultList;
