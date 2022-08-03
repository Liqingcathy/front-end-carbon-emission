import React from "react";
import SearchResult from "./SearchResult";
import "./SearchResultList.css";

const SearchResultList = (props) => {
  console.log("inside searchresultlist component");
  const searchResultCount = (Object.entries(props.displaySearchRes)).length
  const getResultList = (res) => {
    //return props.displaSearchRes.map((result) => {
    return  Object.entries(props.displaySearchRes).map(([key, value]) =>{
      return (
        <SearchResult
          key={value['_id']}
          id={value['_id']}
          title={value.highlight.title} 
          url={value.highlight.url}
          content={value.highlight.content}
        />
      );
  });
  };
  return (
    <div>
      <p className="count-search">Found total {searchResultCount} search result</p>
      <ul className='result-list'>{getResultList(props.displaySearchRes)}</ul>
    </div>
  );

};

export default SearchResultList;
