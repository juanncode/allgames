import React from "react";

import ReactDOM from "react-dom";
import { load_googlemaps } from "../utils/utils";
import "./styles/GameListMap.css";

class GamesListMap extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let google;
    let googleMapsPromise = load_googlemaps();
    Promise.all([googleMapsPromise]).then(values => {
      google = values[0];
      let places = values[1];

      this.google = google;

      this.map = new google.maps.Map(document.getElementById("map"), {
        zoom: 9,
        scrollwheel: true,
        center: { lat: -13.645262, lng: -72.88485 }
      });
      const lugares = this.props.lugares_mapa;
      this.infowindow = new google.maps.InfoWindow();
      console.log("info", this.infowindow);

      lugares.forEach(cancha => {
        console.log("hola", cancha);

        let marker = new google.maps.Marker({
          position: { lat: cancha.latitud, lng: cancha.longitud },
          venue: cancha,
          map: this.map,
          id: cancha.id,
          name: cancha.nombre,
          animation: google.maps.Animation.DROP
        });

        marker.addListener("click", () => {
          if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
          } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
          }
          setTimeout(() => {
            marker.setAnimation(null);
          }, 1000);
        });

        if (marker.visible === false) {
          // this.infowindow.close();
          console.log("false");
        }
        google.maps.event.addListener(marker, "click", () => {
          this.infowindow.setContent(marker.name);
          this.map.setCenter(marker.position);
          this.infowindow.open(this.map, marker);
          this.map.panBy(0, -125);
        });
        this.props.markers.push(marker);
      });
    });
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps);
    console.log(prevState);

    if (this.props.markerClick) {
      this.infowindow.close();

      this.infowindow.setContent(this.props.markerClick.name);
      this.map.setCenter(this.props.markerClick.position);
      this.infowindow.open(this.map, this.props.markerClick);
      this.map.panBy(0, -125);
    }
  }
  render() {
    // return "hola";
    return <div className="mapa-canchas" id="map"></div>; //prettier-ignore
  }
}
// export default GoogleApiWrapper({
//   apiKey: "AIzaSyA0sKdfIBbZ9d-SXavC4IsRXcWKnMIiGz0"
// })(GamesListMap);
export default GamesListMap;
