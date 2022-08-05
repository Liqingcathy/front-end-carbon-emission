import React from "react";
import InputForm from "../UI/InputForm";
import Result from "../UI/Result";
import RecMissionsList from "../UI/RecMissionsList";
import Searchbar from "../search/Searchbar";
import Categories from "../UI/Categories";

const Home = ({userData, getEstimateData, emissionData, getSearchResult, getFuelEfficiencyInsight, efficiencyMPG }) => {
  return (
    <div>
    <Searchbar handleSearchSubmission={getSearchResult}/>
    <InputForm  handleFormSubmission={getEstimateData} />
    <Result data={emissionData} />
    <Categories userData={userData} getFuelEfficiencyInsight={getFuelEfficiencyInsight}/>
    <RecMissionsList efficiencyMPG={efficiencyMPG}/>
    </div>
  )
}

export default Home;