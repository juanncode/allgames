import React from "react";
import "./styles/Navbar.css";
import "bootstrap/dist/css/bootstrap.css";
import logo from "../images/logo.svg";
class Navbar extends React.Component {
  render() {
    return (
      <div className="all-navbar">
        <div className="goTemplate-container  d-flex w-100 h-100 p-3 mx-auto flex-column">
          <div className="masthead mb-auto ">
            <div className="inner">
              <img className="img-fluid" src={logo} alt="logo" />

              <nav className="nav nav-masthead justify-content-center">
                <a
                  className="nav-link active"
                  href="https://getbootstrap.com/docs/4.3/examples/goTemplate/#"
                >
                  Inicio
                </a>
                <a className="nav-link" href="">
                  Mapa
                </a>
                <a className="nav-link" href="">
                  Contactanos
                </a>
                <a className="nav-link" href="">
                  Descarga
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Navbar;
