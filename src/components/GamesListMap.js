import React from "react";

import ReactDOM from "react-dom";
import { load_googlemaps } from "../utils/utils";
import marker2 from "../images/marker4.svg";
import marker5 from "../images/marker5.svg";
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
      lugares.forEach(cancha => {
        if (this.props.markerOver) {
          let marker = new google.maps.Marker({
            position: { lat: cancha.latitud, lng: cancha.longitud },
            venue: cancha,
            map: this.map,
            icon: marker5,
            id: cancha.id,
            name: cancha.nombre,
            animation: google.maps.Animation.DROP
          });
        }
        let marker = new google.maps.Marker({
          position: { lat: cancha.latitud, lng: cancha.longitud },
          venue: cancha,
          map: this.map,
          icon: marker2,
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

        google.maps.event.addListener(marker, "click", () => {
          let titulo = cancha.nombre;
          let price = cancha.price;
          let descripcion = cancha.descripcion;
          let foto = cancha.foto;
          let contentInfo =
            "<div>" +
            `<img src="${foto}" alt="img marker" />` +
            ` <h5>Cancha ${titulo}</h5>` +
            `<h4>S/.${price} por hora</h4>` +
            "</div>";
          console.log(cancha.nombre, marker.descripcion);

          this.infowindow.setContent(contentInfo);
          this.map.setCenter(marker.position);
          this.infowindow.open(this.map, marker);
          this.map.panBy(0, -125);
        });
        // google.maps.event.addListener(marker, "mouseover", () => {
        //   // this.infowindow.setContent(marker.name);
        //   console.log(marker);
        //   marker.setIcon(marker5);
        //   this.map.setCenter(marker.position);
        //   // this.infowindow.open(this.map, marker);
        //   this.map.panBy(0, -125);
        // });
        // google.maps.event.addListener(marker, "mouseout", () => {
        //   // this.infowindow.setContent(marker.name);
        //   console.log(marker);
        //   marker.setIcon(marker2);
        //   this.map.setCenter(marker.position);
        //   // this.infowindow.open(this.map, marker);
        //   this.map.panBy(0, -125);
        // });
        this.props.markers.push(marker);
      });
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.markerOver) {
      this.map.setCenter(this.props.markerOver.position);
      // this.props.markerOver.setIcon(marker5);
      this.infowindow.setContent(this.props.lastCancha.price);
      this.infowindow.open(this.map, this.props.markerOver);
      this.map.panBy(0, -125);
      console.log("hola1", this.props.markerOver);
      if (this.props.markerOver === this.props.markerClick) {
        // this.infowindow.close();

        // this.props.markerClick.setIcon(marker5);
        // this.map.setCenter(this.props.markerClick.position);
        let titulo = this.props.lastCancha.nombre;
        let price = this.props.lastCancha.price;
        let descripcion = this.props.lastCancha.descripcion;
        let foto = this.props.lastCancha.foto;
        let contentInfo =
          "<div>" +
          `<img src="${foto}" alt="img marker"/>` +
          ` <h5>Cancha ${titulo}</h5>` +
          `<h4>S/.${price} por hora</h4>` +
          "</div>";
        this.infowindow.setContent(contentInfo || "not found");
        this.map.setCenter(this.props.markerClick.position);
        this.infowindow.open(this.map, this.props.markerClick);
        this.map.panBy(0, -125);
        // this.props.markerOver = this.props.markerClick;
        console.log("hola2", this.props.markerClick.id);
      }
    }

    // if (this.props.markerOut) {
    //   // this.map.setCenter(this.props.markerOver.position);
    //   if (this.props.markerOut === this.props.markerOver) {
    //     this.infowindow.close();

    //     this.props.markerOut.setIcon(marker5);
    //   } else {
    //     this.infowindow.close();

    //     this.props.markerOut.setIcon(marker2);
    //   }
    //   console.log("hola2", this.props.markerOut);
    //   // this.infowindow.open(this.map, this.props.markerOver);
    //   // this.map.panBy(0, -125);
    // }
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
