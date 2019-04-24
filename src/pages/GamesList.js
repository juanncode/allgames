import React from "react";
import Navbar from "../components/Navbar";
import Games from "../components/Games";
import "./styles/GamesList.css";
import GamesListMap from "../components/GamesListMap";
class GamesList extends React.Component {
  state = {
    data: [
      {
        id: 1,
        nombre: "San Carlos 1 ",
        phone: "829",
        direccion: "jr lima",
        latitud: 28.3,
        longitud: 28.4
      },
      {
        id: 2,
        nombre: "San Carlos2 ",
        phone: "828",
        direccion: "jr lima",
        latitud: 23.3,
        longitud: 22.4
      },
      {
        id: 3,
        nombre: "San Carlos 3 ",
        phone: "827",
        direccion: "jr lima",
        latitud: 231.3,
        longitud: 221.4
      },
      {
        id: 4,
        nombre: "San Carlos 4",
        phone: "826",
        direccion: "jr lima",
        latitud: 2.3,
        longitud: 2.4
      }
    ]
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
              placeholder="Buscar cancha"
              aria-label="Search"
            />
          </form>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-7 list-games">
              <Games lista={this.state.data} />
            </div>
            <div className="col-md-5 mapa-canchas">
              <GamesListMap />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default GamesList;
