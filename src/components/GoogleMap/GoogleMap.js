import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import GoogleMapReact from "google-map-react";

import { device } from "../../utils";
import iconPin from "../../assets/image/png/pin.png";

const MapStyled = styled.div`
  height: 500px;
  padding: 10px;
  .pin {
    display: flex;
    width: 10px;
    align-items: center;
  }
  @media ${device.lg} {
    margin-top: 0px;
    width: 100%;
  }
`;

const LocationPin = () => (
  <div className="pin">
    <img src={iconPin} className="pin-icon" alt="" />
  </div>
);

const GoogleMap = () => {
  const [Loc, setLoc] = useState({});
  if (window.navigator.geolocation) {
    window.navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }

  function showPosition(position) {
    console.log("LATITUDE", position["coords"]["latitude"]);
    console.log("LONGITUDE", position["coords"]["longitude"]);
    setLoc({
      lat: position["coords"]["latitude"],
      lng: position["coords"]["longitude"],
    });
  }

  return (
    <>
      <MapStyled>
        <GoogleMapReact
          bootstrapURLKeys={{ key: `AIzaSyBcQSmBY1QhFLMcfDHsIFp5YEgdj6I_Ge8` }}
          defaultCenter={Loc}
          defaultZoom={17}
          className="h-100 w-100"
        >
          <LocationPin lat={Loc.lat} lng={Loc.lng} />
        </GoogleMapReact>
      </MapStyled>
    </>
  );
};

export default GoogleMap;
