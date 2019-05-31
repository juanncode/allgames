import React from "react";
import Games from "../components/Games";
import "./styles/GamesList.css";
import GamesListMap from "../components/GamesListMap";
import { load_places } from "../utils/utils";

class GamesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: [],
      query: "",
      markers: [],
      lastCancha: "",
      // markerClick: undefined,
      filteredCanchas: [],
      closeInfoWindow: false
    };
  }
  eventTimeout = null;
  cont = 1;

  componentDidMount() {
    this.fetchDataCanchas(); //traer datos desde la api
    this.setState({ data: load_places() });
    this.setState({ filteredCanchas: load_places() });
  }

  fetchDataCanchas = () => {
    this.setState({ loading: true, error: null });
    try {
      this.setState({ loading: false });
      // throw new Error("Not found");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  filterCanchas(query) {
    let f = this.state.data.filter(cancha => {
      return cancha.nombre.toLowerCase().includes(query.toLowerCase());
    });
    //para borrar los markers del mapa que no estan en la lista
    // this.state.markers.forEach(marker => {
    //   if (marker.name.toLowerCase().includes(query.toLowerCase()) === true) {
    //     marker.setVisible(true);
    //     // this.setState({ markerClick: marker });
    //     // console.log("hola");
    //   } else {
    //     marker.setVisible(false);

    //   }
    // });
    this.setState({ query, filteredCanchas: f });
  }
  listItemClick = cancha => {
    let marker = this.state.markers.filter(m => m.id === cancha.id)[0];
    this.setState({
      markerClick: marker,
      lastCancha: cancha
    });
  };
  listItemOver = cancha => {
    let marker = this.state.markers.filter(m => m.id === cancha.id)[0];
    this.setState({
      markerOver: marker,
      lastMarkerSelect: cancha.id,
      lastCancha: cancha
    });
  };
  // listItemOut = cancha => {
  //   let marker = this.state.markers.filter(m => m.id === cancha.id)[0];
  //   this.setState({ markerOut: marker });
  // };
  render() {
    if (this.state.loading) {
      return "Loading...";
    }
    if (this.state.error) {
      return `Error: ${this.state.error.message}`;
    }
    return (
      <React.Fragment>
        <div className="container-map">
          <div className=" search ">
            <input
              type="search"
              value={this.state.query}
              onChange={e => {
                this.filterCanchas(e.target.value);
              }}
              placeholder="Buscar cancha"
              aria-label="Search"
            />
          </div>
          <div className="left">
            {/* condicionando el filtrado de canchas */}
            {this.state.filteredCanchas.length === 0 && (
              <div>
                <h3>No se encontro canchas...</h3>
              </div>
            )}
            {this.state.filteredCanchas &&
              this.state.filteredCanchas.length > 0 && (
                <Games
                  lista={this.state.filteredCanchas}
                  itemClick={this.listItemClick}
                  itemOver={this.listItemOver}
                  // itemOut={this.listItemOut}
                  lastMarkerSelect={this.state.lastMarkerSelect}
                />
              )}
          </div>
          <div className="right">
            <GamesListMap
              lugares_mapa={this.state.data}
              query={this.state.query}
              markers={this.state.markers}
              closeInfoWindow={this.state.closeInfoWindow}
              markerClick={this.state.markerClick}
              lastCancha={this.state.lastCancha}
              markerOver={this.state.markerOver}
              // markerOut={this.state.markerOut}
            />
          </div>
          <div className="footer-container">
            <p className="footer-message1">
              Creado y desarrollado por juanortizmg@gmail.com
            </p>
            <hr />
            <p className="footer-message2">gamesabc.com</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default GamesList;
