// import React from "react";
// import {
//   GoogleMap,
//   withGoogleMap,
//   withScriptjs,
//   DirectionsRenderer,
// } from "react-google-maps";
// import { withProps, compose, lifecycle } from "recompose";
// import { A } from "../Core";
// const google = window.google;

// const MapWithADirectionsRenderer = compose(
//   withProps({
//     googleMapURL:
//       "https://maps.googleapis.com/maps/api/js?key=AIzaSyBcQSmBY1QhFLMcfDHsIFp5YEgdj6I_Ge8&callback=initMap&v=weekly",
//     loadingElement: <div style={{ height: `100%` }} />,
//     containerElement: <div style={{ height: `500px` }} />,
//     mapElement: <div style={{ height: `100%` }} />,
//   }),
//   withScriptjs,
//   withGoogleMap,
//   lifecycle({
//     componentDidMount() {
//       const DirectionsService = new google.maps.DirectionsService();
//       const directionsRenderer = new google.maps.DirectionsRenderer();

//       function initMap() {
//         var mapOptions = {
//           zoom: 15,
//           center: user_location,
//         };

//         const map = new google.maps.Map(
//           document.getElementById("map"),
//           mapOptions
//         );
//         directionsRenderer.setMap(map);
//         calculateAndDisplayRoute(DirectionsService, directionsRenderer);
//       }

//       function calculateAndDisplayRoute(directionsService, directionsRenderer) {
//         directionsService
//           .route({
//             origin: { lat: 13.0146, lng: 77.583 },
//             destination: { lat: 13.0306, lng: 77.5649 },
//             travelMode: google.maps.TravelMode.DRIVING,
//           })
//           .then((response) => {
//             directionsRenderer.setDirections(response);
//           })
//           .catch((e) =>
//             window.alert("Directions request failed due to " + status)
//           );
//       }

//       DirectionsService.route(
//         {
//           origin: new google.maps.LatLng(13.0146, 77.583),
//           destination: new google.maps.LatLng(13.0306, 77.5649),
//           travelMode: google.maps.TravelMode.DRIVING,
//         },
//         (result, status) => {
//           if (status === google.maps.DirectionsStatus.OK) {
//             this.setState({
//               directions: result,
//             });
//           } else {
//             console.error(`error fetching directions ${result}`);
//           }
//         }
//       );
//     },
//   })
// )((props) => (
//   <GoogleMap defaultZoom={10}>
//     {props.directions && <DirectionsRenderer directions={props.directions} />}
//   </GoogleMap>
// ));

// // const myMap = withScriptjs(withGoogleMap((props) => (<GoogleMap />)));

// const GMAP1 = () => {
//   return (
//     <>
//       <MapWithADirectionsRenderer />
//     </>
//   );
// };

// export default GMAP1;
