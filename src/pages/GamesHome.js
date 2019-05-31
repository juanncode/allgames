import React from "react";
import { Link } from "react-router-dom";
import "./styles/GamesHome.css";
import Futbolista from "../images/deporte.jpg";
import Logo from "../images/logo.svg";
class GamesHome extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-home">
          <div className="first-container">
            <div className="titulo">
              <img src={Logo} alt="logo games abc" height="60" width="300" />
            </div>
            <div className="titulo-mensaje">
              <h1>Este es el mensaje de Games ABC</h1>
            </div>
            <div className="description">
              <p>
                ESta es una descripcion ESta es una descripcion ESta es una
                descripcion ESta es una descripcion ESta es una descripcion
              </p>
              <div>
                <Link>Empieza ahora!</Link>
              </div>
            </div>
            <div className="img-games">
              <img
                src={Futbolista}
                alt="img portada"
                height="200"
                width="400"
              />
            </div>
          </div>
          <div className="app-container">
            <img src={Futbolista} alt="img app movil" height="50" width="300" />
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
export default GamesHome;
