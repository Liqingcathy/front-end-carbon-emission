import './App.css';
import Navbar from './Components/layout/Navbar';
import Header from './Components/layout/Subpage';
import Searchbar from './Components/search/Searchbar';
import Input from './Components/UI/Input';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Searchbar />
      <Input />
    </div>
  );
}

export default App;
