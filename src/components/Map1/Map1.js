import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  Polyline,
  DirectionsRenderer,
} from "react-google-maps";

const directionsService = new window.google.maps.DirectionsService();

const origin = { lat: 40.756795, lng: -73.954298 };
const destination = { lat: 41.756795, lng: -78.954298 };

directionsService.route(
  {
    origin: origin,
    destination: destination,
    travelMode: window.google.maps.TravelMode.DRIVING,
  },
  (result, status) => {
    if (status === window.google.maps.DirectionsStatus.OK) {
      this.setState({
        directions: result,
      });
    } else {
      console.error(`error fetching directions ${result}`);
    }
  }
);

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBcQSmBY1QhFLMcfDHsIFp5YEgdj6I_Ge8&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `800px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap defaultZoom={15} defaultCenter={{ lat: 13.0146, lng: 77.583 }}>
    <Polyline
      path={[
        { lat: 13.0146, lng: 77.583 },
        { lat: 13.0306, lng: 77.5649 },
      ]}
    />
  </GoogleMap>
));

export default MyMapComponent;
