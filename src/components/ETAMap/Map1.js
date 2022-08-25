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
    const directionsService = new google.maps.DirectionsService();

    const origin = { lat: 13.0146, lng: 77.583 };
    const destination = { lat: 13.0306, lng: 77.5649 };

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
          containerElement={<div style={{ height: `600px`, width: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default Map2;
