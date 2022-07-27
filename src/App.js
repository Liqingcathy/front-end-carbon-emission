import './App.css';
import { useState } from "react";
import Navbar from './Components/layout/Navbar';
import Header from './Components/layout/Subpage';
import Searchbar from './Components/search/Searchbar';
import InputForm from './Components/UI/InputForm';
import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000';

function App() {
  const [userData, setUserData] = useState([]);
  const [vehicleMakeName, setVehicleMakeName] = useState(''); //car brand
  const [vehicleMakeId, setVehicleMakeId] = useState('');
  const [vehicleModelId, setVehicleModelId] = useState('');
  const [vehicleModelName, setVehicleModelName] = useState('');

  //1.call vehicle make url get list of dict with vehile brand name
  const getVehicleMakes = (brandName) => {
    console.log('inside of api func');
    axios.get(`${API_URL}/vehicle_makes`)
         .then((response) => {
          // console.log(response.data)
          for (let brand of response.data){
            // console.log(brand)
            if (brand['data']['attributes']['name'] === brandName){
                setVehicleMakeName(brandName);
                setVehicleMakeId(brand['data']['id']);
            }
          }
          console.log('vehicleMakeName', vehicleMakeName);
          console.log('vehicleMakeID', vehicleMakeId);
         })
         .catch((error) => {
          console.log('error detected', error);
         })
  }

  // const getVehicleModels = (vehicleMakeId) => {
  //   axios.get(`${API_URL}/vehicle_makes/${vehicleMakeId}/vehicle_models`)
  //       .then((response) => {
  //         setVehicleModelName(response.data['data']['attributes']['name']);
  //         setVehicleModelId(response.data['data']['id']);
  //       })
      
  // }
  // const getEstimateData = (data) => {
  //   let estimated_g, estimated_lb;
  //   axios.get(`${API_URL}/estimate`, data)
  //   .then((response) => {
  //       setUserData(response.data)
  //       estimated_g = response.data['carbon_g'];
  //       estimated_lb = response.data['carbon_lb'];
  //       console.log(estimated_g, estimated_lb);
  //   }).catch((error) => {
  //     console.log('error ', error);
  //   })
  // }

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Searchbar />
      <InputForm  handleVehicleMakesSubmit={getVehicleMakes}/>
    </div>
  );
}

export default App;
