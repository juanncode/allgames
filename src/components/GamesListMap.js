import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class GamesListMap extends React.Component {
  state = {
    markers: [
      {
        name: "Current position",
        position: {
          lat: -13.628058,
          lng: -72.879988
        }
      }
    ]
  };
  render() {
    return (
      <Map
        google={this.props.google}
        initialCenter={{
          lat: -13.628058,
          lng: -72.879988
        }}
        style={{
          width: "100%",
          height: "100%"
        }}
        zoom={14}
      >
        {this.state.markers.map((marker, index) => (
          <Marker position={marker.position} name={marker.name} />
        ))}
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyA0sKdfIBbZ9d-SXavC4IsRXcWKnMIiGz0"
})(GamesListMap);
