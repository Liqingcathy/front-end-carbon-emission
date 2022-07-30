import "./App.css";
import { useState } from "react";
import Navbar from "./Components/layout/Navbar";
import Header from "./Components/layout/Subpage";
import Searchbar from "./Components/search/Searchbar";
import InputForm from "./Components/UI/InputForm";
import Result from "./Components/UI/Result";
import Missions from "./Components/UI/Missions";
import axios from "axios";

const API_URL = "http://127.0.0.1:9000";

function App() {
  const [userData, setUserData] = useState([]);
  const [emissionData, setEmissionData] = useState([]);

  //API call to backend/db and return back to frontend to display estimation result
  const getEstimateData = (data) => {
    console.log("get estimate api call");
    axios
      .post(`${API_URL}/estimate`, data)
      .then((response) => {
        setUserData(response.data);
        console.log(response.data);

        const emissionVal = response.data["data"]["attributes"];
        setEmissionData(emissionVal);
      })
      .catch((error) => {
        console.log("error ", error);
      });
  };

  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Searchbar />
      <InputForm handleFormSubmission={getEstimateData} />
      <Result data={emissionData} />
      <Missions />
    </div>
  );
}

export default App;
