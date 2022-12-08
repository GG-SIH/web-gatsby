/*global google*/
import React, { Component } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  DirectionsRenderer,
} from "react-google-maps";
class Map2 extends Component {
  state = {
    directions: null,
  };

  componentDidMount() {
    let originPoints = [
      { lat: 13.0283, lng: 77.5731 },
      { lat: 13.0665, lng: 77.598 },
      { lat: 13.0147, lng: 77.581 },
      { lat: 13.1989141, lng: 77.7046244 },
      { lat: 12.986772676715134, lng: 77.5874634998148 },
    ];

    let destinationPoints = [
      { lat: 13.0306, lng: 77.5649 },
      { lat: 13.0328, lng: 77.5697 },
      { lat: 12.973826, lng: 77.590591 },
      { lat: 12.951428848506843, lng: 77.58446881669242 },
      { lat: 12.998281187056858, lng: 77.60079808413852 },
    ];

    let originPos = Math.round((Math.random() * 10) % 5);
    let destinationPos = Math.round((Math.random() * 10) % 5);

    const directionsService = new google.maps.DirectionsService();

    const origin = originPoints[originPos];
    const destination = destinationPoints[destinationPos];

    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  }

  render() {
    const GoogleMapExample = withGoogleMap((props) => (
      <GoogleMap defaultCenter={{ lat: 13.0146, lng: 77.583 }} defaultZoom={12}>
        <DirectionsRenderer directions={this.state.directions} />
      </GoogleMap>
    ));

    return (
      <div>
        <GoogleMapExample
          containerElement={<div style={{ height: `800px`, width: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default Map2;
