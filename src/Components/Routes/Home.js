import React from "react";
import InputForm from "../UI/InputForm";
import EstimateObject from "../UI/EstimateObject";
import Searchbar from "../search/Searchbar";
import Categories from "../UI/Categories";
import MpgFuelEconomy from "../Insight/MpgFuelEconomy";
import DrivingHabbit from "../Insight/DrivingHabbit";
import SocialImpact from "../Insight/SocialImpact";
const Home = ({userData, getEstimateData, emissionData, getSearchResult, getFuelEfficiencyInsight, efficiencyMPG }) => {
  return (
    <div>
      <Searchbar handleSearchSubmission={getSearchResult}/>
      <InputForm  handleFormSubmission={getEstimateData}  />
      <EstimateObject  emissionData={emissionData}  />
      <Categories userData={userData} emissionData={emissionData} getFuelEfficiencyInsight={getFuelEfficiencyInsight} />
      <MpgFuelEconomy  efficiencyMPG={efficiencyMPG}/>
      <DrivingHabbit emissionData={emissionData} efficiencyMPG={efficiencyMPG} />
      <SocialImpact emissionData={emissionData} />  
    </div>
  )
}

export default Home;