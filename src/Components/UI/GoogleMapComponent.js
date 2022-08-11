import React from "react";
import './GoogleMapComponent.css';
import { useJsApiLoader, GoogleMap, useLoadScript, Marker, InfoWindow} from "@react-google-maps/api";
// import "@reach/combobox/styles.css";
const center = {lat: 41.850033, lng: -87.6500523};
const libraries = ['places']

const GoogleMapComponent = () => {

  const {isLoaded, loadError} = useLoadScript ({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
    libraries,
  })
  // console.log('api key');
  // console.log(process.env.REACT_APP_GOOGLE_MAP_API_KEY);
  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";
  // const {isLoaded} = useLoadScript ({
  //   googleMapsApiKey: process.env.GOOGLE_MAP_API_KEY,
  // })

  // if (!isLoaded) {
  //   // return <SkeletonText />
  //   return 'loading map'
  // }

  return (
    <div className="map">
      <GoogleMap
        center={center}
        zoom={15}
        mapContainerStyle={{width: '100%', height: '100%'}}
        />
    </div>
  )
}

export default GoogleMapComponent;