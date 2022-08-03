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
          content={value['_source']['content']}
        />
      );
  });
  };
  return (
    <div>
      <h3>search result</h3>
      <ul className='result-list'>{getResultList(props.displaSearchRes)}</ul>
    </div>
  );

};

export default SearchResultList;
