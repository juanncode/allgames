import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class GamesMaps extends React.Component {
  state = {
    markers: [
      {
        name: "Current position",
        position: {
          lat: this.props.lat,
          lng: this.props.lng
        }
      }
    ]
  };

  render() {
    return (
      <Map
        google={this.props.google}
        initialCenter={{
          lat: this.props.lat,
          lng: this.props.lng
        }}
        la
        style={{
          width: "100%",
          height: "100%"
        }}
        zoom={14}
      >
        {this.state.markers.map((marker, index) => (
          <Marker
            position={marker.position}
            draggable={true}
            onDragend={(t, map, coord) =>
              this.props.onMarkerDragEnd(coord, index)
            }
            name={marker.name}
          />
        ))}
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyA0sKdfIBbZ9d-SXavC4IsRXcWKnMIiGz0"
})(GamesMaps);
