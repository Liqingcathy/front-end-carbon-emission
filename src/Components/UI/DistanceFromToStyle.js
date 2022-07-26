import React, { useState, useRef } from "react";
import {FaRegPlusSquare, FaRegTimesCircle} from "react-icons/fa"
// import "./InputForm.css";
// import Select from 'react-select';
import "./DistanceFromTo.css";
import {
  useJsApiLoader,
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
  Autocomplete,
} from "@react-google-maps/api";

const center = { lat: -74, lng: 40.7 };
// const libraries = ['places'];

const DistanceFromTo = ({ userData, setUserData }) => {
  console.log("inside of distanceFromTo");
  // console.log(userData);
  const [libraries] = useState(["places"]); //avoid warning
  const [freq, setFreq] = useState(1);
  const [routeCalResponse, setRouteCalResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [totalDistance, setTotalDistance] = useState(0);
  const [selected, setSelected] = useState("");

  //add/remove input form
  const [inputFormList, setInputFormList] = useState([
    { from: "", to: "", mile: 0 },
  ]);
  // const [inputFormList, setInputFormList] = useState([{'path': ''}]);
  // gives the same ref object on every render.
  const originRef = useRef();
  const destinationRef = useRef();

  console.log(inputFormList);
  console.log(totalDistance);

  //load google map
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
    libraries: libraries,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  //path frequency select options
  const frequencyWeek = [
    {
      value: "",
      label: "time/week",
      disabled: true,
    },
    { value: "1", label: "1/week" },
    { value: "2", label: "2/week" },
    { value: "3", label: "3/week" },
    { value: "4", label: "4/week" },
    { value: "5", label: "5/week" },
    { value: "6", label: "6/week" },
    { value: "7", label: "7/week" },
  ];

  //calculate from-to distance in mile and set distance to the result
  async function calculateDistance() {
    if (originRef.current.value === "" || destinationRef.current.value === "") {
      return;
    }
    // eslint-disable-next-line no-undef
    const directionService = new google.maps.DirectionsService();
    const results = await directionService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING, //traffic
    });

    // debugger;
    setRouteCalResponse(results);
    const tempDistance = results.routes[0].legs[0].distance.text; //"xx mile" in string
    setDistance(tempDistance);
  }

  //get float number from a string result
  const extractMileFromStr = (str) => {
    const str_list = str.split(" ");
    return parseFloat(str_list[0]);
  };

  // const clearRoutes = () => {
  //   setRouteCalResponse('');
  //   setDistance('');
  //   originRef.current.value = '';
  //   destinationRef.current.value = '';

  // }

  //add from-to path box for more distance
  const handleAddInputBox = () => {
    setInputFormList([...inputFormList, { from: "", to: "", mile: 0 }]);
    setDistance("");
  };

  const handleRemoveInputBox = (index) => {
    const list = [...inputFormList];

    //try to substract current distance value from total when remove
    const pathMile = list[index].mile;
    console.log("pathMile");
    console.log(pathMile);

    list.splice(index, 1);
    setInputFormList(list);

    // console.log('totalDistance-pathMile', totalDistance, pathMile);
    // console.log('totalDistance-pathMile', totalDistance, pathMile);
    // console.log('after subtraction' , totalDistance - pathMile);
    setTotalDistance(parseFloat(totalDistance - pathMile).toFixed(2));
  };

  //update input form values after users' input value
  const handleInputFormChange = (event, index) => {
    const { name, value } = event.target; //destruction
    const list = [...inputFormList];
    list[index][name] = value;
    setInputFormList(list);
  };

  //select frequency changes
  const handleChange = (event, index) => {
    console.log("Label 👉️", event.target.selectedOptions[0].label);
    console.log(event.target.value);
    setSelected(event.target.value);

    const tempFrep = parseInt(event.target["value"]);
    setFreq(tempFrep);

    const tempTotalDistance =
      totalDistance + extractMileFromStr(distance) * tempFrep;

    const newList = [...inputFormList];
    newList[index] = {
      ...newList[index],
      mile: extractMileFromStr(distance) * tempFrep,
    };
    //try to update inputform's distance value to current total distance
    // setInputFormList(inputFormList.map(item => (
    //   {...item,  mile : tempTotalDistance
    // })));
    setInputFormList(newList);
    setTotalDistance(tempTotalDistance);
    //setInputFormList({...inputFormList, distance: tempTotalDistance})
    //want to update user's input field: total_path_value
    setUserData({ ...userData, distance_value: tempTotalDistance });
    setSelected("");
  };

  return (
    <div className='top-form-wrapper'>
        <p id="home-desc">30~100+ Vehicle Makes and 1000+ Models are Available</p>
      {inputFormList.map((inputForm, index) => (
        <div key={index} className='calculate'>
          <div className="calculate-all-box"> 
          <div className='container'>
            <Autocomplete className="autocomplete-div">
              {/* <label>drive from</label> */}
              <input id="calc-input-color"
                // className='from-to-intput'
                type='text'
                placeholder='drive from'
                name='from'
                ref={originRef}
                value={inputFormList.from}
                onChange={(event) => handleInputFormChange(event, index)}
              />
            </Autocomplete >
          </div>
          <div className='container'>
            <Autocomplete className="autocomplete-div">
              <input id="calc-input-color"
                // className='from-to-intput'
                type='text'
                placeholder='drive to'
                name='to'
                value={inputFormList.to}
                ref={destinationRef}
                onChange={(event) => handleInputFormChange(event, index)}
              />
            </Autocomplete>
          </div>

          <div className='container'>
            <select
              className='select-bar'
              name='mile'
              value={selected}
              onChange={(event) => handleChange(event, index)}
            >
              {frequencyWeek.map((option) => (
                <option
                  disabled={option.disabled}
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </option>
              ))}
            </select>
            <button 
              className="calculate-btn"
              onClick={calculateDistance}>
              calculate
            </button>
            </div>
          

          {/* <span>distance {inputFormList[index].mile}</span> */}

          {/* <button className="google-map-api-btn" onClick={clearRoutes} >clear</button> */}

          <div className='distance-add-path-btn-wrap'>
            <ul className='add-remove-btn-ul'>
              {/* show add form box button only at the end */}
              {inputFormList.length - 1 === index && inputFormList.length >= 1 && (
                <button 
                  className='add-input-box-btn'
                  onClick={handleAddInputBox}
                >
                  <FaRegPlusSquare className="plus-icon"/>
                </button>
              )}
              {inputFormList.length > 1 && (
                <button
                  className='remove-input-box-btn'
                  onClick={() => handleRemoveInputBox(index)}
                >
                  <FaRegTimesCircle className="remove-icon" />
                </button>
              )}
             
              {/* </ul>  */}
            </ul>
            </div>
          </div>
        </div>
      ))}

      <div className='current-total-distance'>
        Your current distance sum: {totalDistance} mile
      </div>
      {/* <div className="google-map-load">
          <GoogleMap
            center={center}
            zoom={15}
            mapContainerStyle={{width: '70%', height: '70%'}}
          />
      </div>  */}
    </div> //<div className="from-to">
  );
};

export default DistanceFromTo;
