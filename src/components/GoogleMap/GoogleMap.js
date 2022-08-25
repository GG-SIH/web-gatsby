import React, { useEffect } from "react";
import { initMap, calculateAndDisplayRoute } from "./Index";

const GoogleMap = () => {
  let text = "";
  if (window.navigator.geolocation) {
    // Geolocation available
    text = "avaialbe";
  }

  return (
    <>
      {initMap}
      <div class="item" id="map"></div>
      <script
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBcQSmBY1QhFLMcfDHsIFp5YEgdj6I_Ge8&callback=initMap&v=weekly"
        async
      ></script>
    </>
  );
};
export default GoogleMap;
