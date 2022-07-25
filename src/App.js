import './App.css';
import { useState } from "react";
import Navbar from './Components/layout/Navbar';
import Header from './Components/layout/Subpage';
import Searchbar from './Components/search/Searchbar';
import InputForm from './Components/UI/InputForm';

function App() {
  const [userData, setUserData] = useState([]);
  
  const getEstimateData = () => {
    
  }

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Searchbar />
      <InputForm handleFormSubmit={userData}/>
    </div>
  );
}

export default App;
