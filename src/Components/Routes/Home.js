import React from "react";
import InputForm from "../UI/InputForm";
import EstimateObject from "../UI/EstimateObject";
import Searchbar from "../search/Searchbar";
import Categories from "../UI/Categories";
import Sorting from "../UI/Sorting";
import SortingDisplays from "../UI/SortingDisplays";
import GoogleMapComponent from "../UI/GoogleMapComponent";
// import {SkeletonText} from '@chakra-ui/react';

const Home = ({userData, getEstimateData, emissionData, getSearchResult, getFuelEfficiencyInsight, efficiencyMPG,getUserEmission, userInput, userDb, hasEmissionValue, getUSHistoricalEmission, getFilteredData, sortingResult }) => {
 
  return (
    <div>
      <Searchbar handleSearchSubmission={getSearchResult}/>
      <Sorting getFilteredData={getFilteredData}/>
      <SortingDisplays sortingResult={sortingResult}/>
      <InputForm  handleFormSubmission={getEstimateData}/>
      <GoogleMapComponent />
      <EstimateObject  efficiencyMPG={efficiencyMPG} emissionData={emissionData} />
      <Categories  userData={userData} emissionData={emissionData} efficiencyMPG={efficiencyMPG} getFuelEfficiencyInsight={getFuelEfficiencyInsight} getUserEmission={getUserEmission} userInput={userInput} userDb={userDb} 
      getUSHistoricalEmission={getUSHistoricalEmission} />
     
    </div>
  )
}

export default Home;