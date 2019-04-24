import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";
import logo from "../images/logo.svg";
class Navbar extends React.Component {
  render() {
    return (
      <div className="all-navbar">
        <div className="goTemplate-container  d-flex w-100 h-100 p-3 mx-auto flex-column">
          <div className="masthead mb-auto ">
            <div className="inner">
              <Link to="/">
                <img className="img-fluid" src={logo} alt="logo" />
              </Link>

              <nav className="nav nav-masthead justify-content-center">
                <Link className="nav-link " to="/home">
                  Inicio
                </Link>
                <Link className="nav-link" to="/mapa">
                  Mapa
                </Link>
                <Link className="nav-link" to="/">
                  Contactanos
                </Link>
                <Link className="nav-link" to="/">
                  Descarga
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Navbar;
