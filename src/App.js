import './App.css';
import { useState } from "react";
import Navbar from './Components/layout/Navbar';
import Header from './Components/layout/Subpage';
import Searchbar from './Components/search/Searchbar';
import InputForm from './Components/UI/InputForm';
import axios from 'axios';

const API_URL = 'http://localhost:5000';

function App() {
  const [userData, setUserData] = useState([]);
  

  const getEstimateData = () => {
    let estimated_g, estimated_lb;
    axios.get(`${API_URL}/estimate`)
    .then((response) => {
        setUserData(response.data)
        estimated_g = response.data['carbon_g'];
        estimated_lb = response.data['carbon_lb'];

        console.log(estimated_g, estimated_lb);
    }).catch((error) => {
      console.log('error ', error);
    })
  }

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Searchbar />
      <InputForm handleFormSubmit={getEstimateData}/>
    </div>
  );
}

export default App;
