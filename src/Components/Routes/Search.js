import React from "react";
import Searchbar from "../search/Searchbar";
import SearchResultList from "../search/SearchResultList";

const Search = (props) => {
  return (
    <div>This is search result page 
      <Searchbar handleSearchSubmission={props.getSearchResult}/>
      <SearchResultList displaSearchRes={props.searchResults} />
    </div>
  )
}

export default Search;