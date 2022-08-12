import React from "react";
import InputForm from "../UI/InputForm";
import EstimateObject from "../UI/EstimateObject";
import Searchbar from "../search/Searchbar";
import Categories from "../UI/Categories";
import Sorting from "../UI/Sorting";
import SortingDisplays from "../UI/SortingDisplays";
// import {SkeletonText} from '@chakra-ui/react';

const Home = ({setEmissionData, userData, getEstimateData, emissionData, getSearchResult, getFuelEfficiencyInsight, efficiencyMPG,getUserEmission, userInput, userDb, getUSHistoricalEmission, getFilteredData, sortingResult}) => {
 
  return (
    <div>
      <Searchbar handleSearchSubmission={getSearchResult}/>
      <InputForm  handleFormSubmission={getEstimateData} />
      <EstimateObject  efficiencyMPG={efficiencyMPG} emissionData={emissionData} />
       {/* passing setEmissionData to Soring component from EstimatedObject*/}
      <Sorting getFilteredData={getFilteredData} setEmissionData={setEmissionData}/> 
      <SortingDisplays sortingResult={sortingResult} />
      <Categories  userData={userData} emissionData={emissionData} efficiencyMPG={efficiencyMPG} getFuelEfficiencyInsight={getFuelEfficiencyInsight} getUserEmission={getUserEmission} userInput={userInput} userDb={userDb} 
      getUSHistoricalEmission={getUSHistoricalEmission} />
     
    </div>
  )
}

export default Home;