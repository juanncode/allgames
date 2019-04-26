import React from "react";
import Games from "../components/Games";
import "./styles/GamesList.css";
import GamesListMap from "../components/GamesListMap";
import { load_places } from "../utils/utils";

class GamesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      query: "",
      markers: [],
      markerClick: undefined,
      filteredCanchas: []
    };
  }
  eventTimeout = null;
  cont = 1;

  componentDidMount() {
    this.setState({ data: load_places() });
    this.setState({ filteredCanchas: load_places() });
  }

  filterCanchas(query) {
    let f = this.state.data.filter(cancha => {
      return cancha.nombre.toLowerCase().includes(query.toLowerCase());
    });
    this.state.markers.forEach(marker => {
      if (marker.name.toLowerCase().includes(query.toLowerCase()) == true) {
        marker.setVisible(true);
        this.setState({ markerClick: marker });
        // console.log("hola");
      } else {
        marker.setVisible(false);
      }
    });
    this.setState({ query, filteredCanchas: f });
  }
  listItemClick = cancha => {
    let marker = this.state.markers.filter(m => m.id === cancha.id)[0];
    this.setState({ markerClick: marker });
  };
  listItemOver = cancha => {
    let marker = this.state.markers.filter(m => m.id === cancha.id)[0];
    this.setState({ markerClick: marker });
  };
  render() {
    return (
      <React.Fragment>
        <div className=" search ">
          <form className="form-inline col-md-7">
            <i className="fas fa-search" aria-hidden="true" />
            <input
              className="form-control form-control-sm ml-2 w-75"
              type="text"
              value={this.state.query}
              onChange={e => {
                this.filterCanchas(e.target.value);
              }}
              placeholder="Buscar cancha"
              aria-label="Search"
            />
          </form>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-7 list-games">
              {/* condicionando el filtrado de canchas */}
              {this.state.filteredCanchas &&
                this.state.filteredCanchas.length > 0 && (
                  <Games
                    lista={this.state.filteredCanchas}
                    itemClick={this.listItemClick}
                    itemOver={this.listItemOver}
                  />
                )}
            </div>
            <div className="col-md-5 ">
              <GamesListMap
                lugares_mapa={this.state.data}
                query={this.state.query}
                markers={this.state.markers}
                markerClick={this.state.markerClick}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default GamesList;
