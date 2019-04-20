import React from "react";
import Navbar from "../components/Navbar";
import "../components/styles/global.css";
import "./styles/GamesHome.css";
import Futbolista from "../images/deporte.jpg";
class GamesHome extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container goTemplate">
          <div className="row">
            <div className="col-6">
              <h1 className="goTemplate-heading">
                Con Games, disfrute de la diversión donde usted elija.
              </h1>
              <p className="lead">
                Todas las canchas de la ciudad en una sola app, seleccione el
                lugar y contactese de inmediato.
              </p>
              <p className="lead">
                <a
                  href="http://localhost:3000/mapa"
                  className="btn btn-lg btn-primary"
                >
                  Empieza ya!
                </a>
              </p>
            </div>
            <div className="col-6 ">
              <img className="avatar" src={Futbolista} alt="img futbolista" />
            </div>
          </div>
        </div>
        <div className="mastfoot text-center">
          <p>©2019 Gogo app by juanortizmg@gmail.com.</p>
        </div>
      </div>
    );
  }
}
export default GamesHome;
