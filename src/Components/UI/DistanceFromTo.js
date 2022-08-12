import React, {useState, useRef} from "react";
import './InputForm.css';
// import Select from 'react-select';
import AsyncSelect from 'react-select/async'
import { useJsApiLoader, GoogleMap, useLoadScript, Marker, InfoWindow, Autocomplete} from "@react-google-maps/api";


const center = {lat: -74, lng: 40.7};
// const libraries = ['places'];

const DistanceFromTo = () => {
  const [ libraries ] = useState(['places']); //avoid warning
  const [freq, setFreq] = useState(1);
  const [routeCalResponse, setRouteCalResponse] = useState(null);
  const [distance, setDistance] = useState('');
  const [totalDistance, setTotalDistance] = useState(0);
  // console.log(`freq ${freq}`);
  //add/remove input form
  const [inputFormList, setInputFormList] = useState([{'path': ''}]);
  // console.log('inputFormList');
  // console.log(inputFormList);

  // gives the same ref object on every render.
  const originRef = useRef();
  const destinationRef = useRef();


  const {isLoaded, loadError} = useLoadScript ({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
    libraries: libraries,
  })
  
  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  const frequencyWeek = [
    {value: '1', label: '1/week'},
    {value: '2', label: '2/week'},
    {value: '3', label: '3/week'},
    {value: '4', label: '4/week'},
    {value: '5', label: '5/week'},
    {value: '6', label: '6/week'},
    {value: '7', label: '7/week'}
  ]
  
 async function calculateDistance() {
    if (originRef.current.value === '' || destinationRef.current.value === ''){
      return
    }
    // eslint-disable-next-line no-undef
    const directionService = new google.maps.DirectionsService();
    const results = await directionService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING //traffic
    })

    setRouteCalResponse(results);
    setDistance(results.routes[0].legs[0].distance.text); //choose first option route
    console.log(`totalDistance before ${totalDistance}`);
    setTotalDistance(totalDistance + (extractMileFromStr(distance)*freq));
    console.log(`totalDistance after ${totalDistance}`)
  }

  const extractMileFromStr = (str) => {
    const str_list = str.split(' ');
    return parseFloat(str_list[0])
  }

  const clearRoutes = () => {
    setRouteCalResponse('');
    setDistance('');
    originRef.current.value = '';
    destinationRef.current.value = '';

  }

  const handleAddInputBox= () => {
    setInputFormList([...inputFormList, {'path': ''}]);
    setDistance('');
  }

  const handleRemoveInputBox = (index) => {
    const list = [...inputFormList];
    list.splice(index, 1);
    setInputFormList(list);
    setTotalDistance(totalDistance - parseFloat(extractMileFromStr(distance)));
  }

  //update input form values after input value
  const handleInputFormChange = (event, index) => {
    const {name, value} = event.target; //destruction
    const list = [...inputFormList];
    list[index][name] = value;
    setInputFormList(list);
  };

  const handleChange = (selectedOption) => {
    console.log("handleChange" , selectedOption);
    // setSortings(selectedOption);
    console.log(selectedOption['value']);
    setFreq(parseInt(selectedOption));
  };

  // console.log(`emission ${emission}`);
  const loadOptions = (searchValue, callback) => {
    setTimeout(() => {
      const filteredOptions = frequencyWeek.filter(option => option.label.toLowerCase()
      .includes(searchValue.toLowerCase())
      );
      // console.log(`loadOptions ${JSON.stringify(searchValue)}, ${JSON.stringify(filteredOptions)}`)
      callback(filteredOptions)
    }, 2000);
  };


  return (
    <div className="from-to">
     {inputFormList.map((inputForm, index) => 
      <div key={index} className="input-form-list-container"> 
        <ul>
          <Autocomplete>
            <input className="from-intput" type='text' placeholder="from" name='path' 
            ref={originRef} 
            value={inputFormList.path} 
            onChange= {(event) => handleInputFormChange(event, index)}/>
         </Autocomplete>   
         <Autocomplete>   
           <input className="from-intput" type='text'  placeholder="to" ref={destinationRef} />
         </Autocomplete>  
        <button className="google-map-api-btn" onClick={calculateDistance} >calculate distance </button> 
        <button className="google-map-api-btn" onClick={clearRoutes} >clear route</button>
        <span>result {distance}</span>
        </ul>
        <div>
          {/* <Select className="select-bar"
           placeholder="select frequency of above path"
           options={frequencyWeek}
           value={freq}
           onChange={(event) => {setFreq(event.target.value)}} />  */}
        <AsyncSelect loadOptions={loadOptions}  defaultOptions placeholder='select frequency/week for this path' onChange={handleChange} />
        </div>
        <div>
        {/* show add form box button only at the end */}
        {inputFormList.length -1 === index && inputFormList.length >= 1 
          && (<button className="add-input-box-btn" onClick={handleAddInputBox} >add</button>)}
        {inputFormList.length > 1 && (<button className="remove-input-box-btn" onClick={ () => 
          handleRemoveInputBox(index)} ><span>remove</span></button>)}
        </div> 
        
      </div>
      
      )} 
      <div className="current-total-distance">Your current distance sum: {totalDistance}</div>
      <div className="google-map-load">
          <GoogleMap
            center={center}
            zoom={15}
            mapContainerStyle={{width: '70%', height: '70%'}}
          />
      </div> 
  </div> //<div className="from-to">
  )
}

export default DistanceFromTo;